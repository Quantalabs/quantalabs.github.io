Font.loadWebFonts();
Vex.Flow.setMusicFont("Bravura", "Gonville", "Custom");

const diatDiv = document.getElementById("diat");
const diatRend = new Renderer(diatDiv, Renderer.Backends.SVG);

// Configure the rendering context.
diatRend.resize(500, 200);
const diatContext = diatRend.getContext();

// Create a stave of width 400 at position 10, 40 on the canvas.
const diatStave = new Stave(50, 40, 400);

// Add a clef and time signature.
diatStave.addClef("treble");

// Connect it to the rendering context and draw!
diatStave.setContext(diatContext).draw();

// Create the notes
const diatNotes = [
	// A C-Major chord.
	new StaveNote({ keys: ["C/4"], duration: "q" }),
	new StaveNote({ keys: ["D/4"], duration: "q" }),
	new StaveNote({ keys: ["E/4"], duration: "q" }),
	new StaveNote({ keys: ["F/4"], duration: "q" }),
	new StaveNote({ keys: ["G/4"], duration: "q" }),
	new StaveNote({ keys: ["A/4"], duration: "q" }),
	new StaveNote({ keys: ["B/4"], duration: "q" }),
];

// Create a voice in 4/4 and add above notes
const diatVoice = new Voice({ num_beats: 7, beat_value: 4 });
diatVoice.addTickables(diatNotes);

// Format and justify the notes to 400 pixels.
new Formatter().joinVoices([diatVoice]).format([diatVoice], 350);

// Render voice
diatVoice.draw(diatContext, diatStave);

const aeolianDiv = document.getElementById("aeolian");
const aeolianRend = new Renderer(aeolianDiv, Renderer.Backends.SVG);

// Configure the rendering context.
aeolianRend.resize(500, 200);
const aeolianContext = aeolianRend.getContext();

// Create a stave of width 400 at position 10, 40 on the canvas.
const aeolianStave = new Stave(50, 40, 400);

// Add a clef and time signature.
aeolianStave.addClef("treble");

// Connect it to the rendering context and draw!
aeolianStave.setContext(aeolianContext).draw();

const aeolianNotes = [
	new StaveNote({ keys: ["A/3"], duration: "q" }),
	new StaveNote({ keys: ["B/3"], duration: "q" }),
	new StaveNote({ keys: ["C/4"], duration: "q" }),
	new StaveNote({ keys: ["D/4"], duration: "q" }),
	new StaveNote({ keys: ["E/4"], duration: "q" }),
	new StaveNote({ keys: ["F/4"], duration: "q" }),
	new StaveNote({ keys: ["G/4"], duration: "q" }),
];

// Create a voice in 4/4 and add above notes
const aeolianVoice = new Voice({ num_beats: 7, beat_value: 4 });
aeolianVoice.addTickables(aeolianNotes);

// Format and justify the notes to 400 pixels.
new Formatter().joinVoices([aeolianVoice]).format([aeolianVoice], 350);

// Render voice
aeolianVoice.draw(aeolianContext, aeolianStave);

const asharp_minDiv = document.getElementById("asharp_min");
const asharp_minRend = new Renderer(asharp_minDiv, Renderer.Backends.SVG);

// Configure the rendering context.
asharp_minRend.resize(500, 200);
const asharp_minContext = asharp_minRend.getContext();

// Create a stave of width 400 at position 10, 40 on the canvas.
const asharp_minStave = new Stave(50, 40, 400);

// Add a clef and time signature.
asharp_minStave.addClef("treble");

// Connect it to the rendering context and draw!
asharp_minStave.setContext(asharp_minContext).draw();

const asharp_minNotes = [
	new StaveNote({ keys: ["Bb/3"], duration: "q" }).addModifier(
		new Accidental("b"),
	),
	new StaveNote({ keys: ["C/4"], duration: "q" }),
	new StaveNote({ keys: ["Db/4"], duration: "q" }).addModifier(
		new Accidental("b"),
	),
	new StaveNote({ keys: ["Eb/4"], duration: "q" }).addModifier(
		new Accidental("b"),
	),
	new StaveNote({ keys: ["F/4"], duration: "q" }),
	new StaveNote({ keys: ["Gb/4"], duration: "q" }).addModifier(
		new Accidental("b"),
	),
	new StaveNote({ keys: ["Ab/4"], duration: "q" }).addModifier(
		new Accidental("b"),
	),
];

// Create a voice in 4/4 and add above notes
const asharp_minVoice = new Voice({ num_beats: 7, beat_value: 4 });
asharp_minVoice.addTickables(asharp_minNotes);

// Format and justify the notes to 400 pixels.
new Formatter().joinVoices([asharp_minVoice]).format([asharp_minVoice], 350);

// Render voice
asharp_minVoice.draw(asharp_minContext, asharp_minStave);
if (
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches
) {
	document.querySelector("#diat svg").setAttribute("fill", "white");
	document.querySelector("#diat svg").setAttribute("stroke", "white");

	document.querySelector("#aeolian svg").setAttribute("fill", "white");
	document.querySelector("#aeolian svg").setAttribute("stroke", "white");

	document.querySelector("#asharp_min svg").setAttribute("fill", "white");
	document.querySelector("#asharp_min svg").setAttribute("stroke", "white");
}
