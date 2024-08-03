const { Accidental } = Vex.Flow;

Font.loadWebFonts();
Vex.Flow.setMusicFont("Bravura", "Gonville", "Custom");

const chromDiv = document.getElementById("chrom");
const chromRend = new Renderer(chromDiv, Renderer.Backends.SVG);

// Configure the rendering context.
chromRend.resize(500, 200);
const chromContext = chromRend.getContext();

// Create a stave of width 400 at position 10, 40 on the canvas.
const chromStave = new Stave(50, 40, 400);

// Add a clef and time signature.
chromStave.addClef("treble");

// Connect it to the rendering context and draw!
chromStave.setContext(chromContext).draw();

// Create the notes
const chromNotes = [
	// A C-Major chord.
	new StaveNote({ keys: ["C/4"], duration: "q" }),
	new StaveNote({ keys: ["C#/4"], duration: "q" }).addModifier(
		new Accidental("#"),
	),
	new StaveNote({ keys: ["D/4"], duration: "q" }),
	new StaveNote({ keys: ["D#/4"], duration: "q" }).addModifier(
		new Accidental("#"),
	),
	new StaveNote({ keys: ["E/4"], duration: "q" }),
	new StaveNote({ keys: ["F/4"], duration: "q" }),
	new StaveNote({ keys: ["F#/4"], duration: "q" }).addModifier(
		new Accidental("#"),
	),
	new StaveNote({ keys: ["G/4"], duration: "q" }),
	new StaveNote({ keys: ["G#/4"], duration: "q" }).addModifier(
		new Accidental("#"),
	),
	new StaveNote({ keys: ["A/4"], duration: "q" }),
	new StaveNote({ keys: ["A#/4"], duration: "q" }).addModifier(
		new Accidental("#"),
	),
	new StaveNote({ keys: ["B/4"], duration: "q" }),
];

// Create a voice in 4/4 and add above notes
const chromVoice = new Voice({ num_beats: 12, beat_value: 4 });
chromVoice.addTickables(chromNotes);

// Format and justify the notes to 400 pixels.
new Formatter().joinVoices([chromVoice]).format([chromVoice], 350);

// Render voice
chromVoice.draw(chromContext, chromStave);

if (
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches
) {
	document.querySelector("#chrom svg").setAttribute("fill", "white");
	document.querySelector("#chrom svg").setAttribute("stroke", "white");
}
