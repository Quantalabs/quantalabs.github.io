const { Renderer, Stave, StaveNote, Voice, Formatter, ChordSymbol, Font } =
	Vex.Flow;

Font.loadWebFonts();
Vex.Flow.setMusicFont("Bravura", "Gonville", "Custom");

// Create an SVG renderer and attach it to the DIV element named "boo".
const div = document.getElementById("IVI");
const renderer = new Renderer(div, Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(220, 200);
const context = renderer.getContext();

// Create a stave of width 400 at position 10, 40 on the canvas.
const stave = new Stave(0, 40, 220);

// Add a clef and time signature.
stave.addClef("treble");

// Connect it to the rendering context and draw!
stave.setContext(context).draw();

// Create the notes
const notes = [
	// A C-Major chord.
	new StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" }),
	new StaveNote({ keys: ["d/4", "b/3", "g/4"], duration: "q" }),
	new StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" }),
];
const chords = [];

// Create a voice in 4/4 and add above notes
const voice = new Voice({ num_beats: 3, beat_value: 4 });
voice.addTickables(notes);

chords.push(new ChordSymbol().setVertical("bottom").addText("I"));
chords.push(
	new ChordSymbol()
		.setVertical("bottom")
		.addText("V")
		.addTextSuperscript("6")
		.addTextSubscript("3"),
);
chords.push(new ChordSymbol().setVertical("bottom").addText("I"));

for (let i = 0; i < notes.length; i++) {
	notes[i].addModifier(chords[i], 0);
}

// Format and justify the notes to 400 pixels.
new Formatter().joinVoices([voice]).format([voice], 140);

// Render voice
voice.draw(context, stave);

document
	.getElementById("IVI2")
	.appendChild(document.querySelector("#IVI svg").cloneNode(true));

if (
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches
) {
	document.querySelector("#IVI svg").setAttribute("fill", "white");
	document.querySelector("#IVI svg").setAttribute("stroke", "white");

	document.querySelector("#IVI2 svg").setAttribute("fill", "white");
	document.querySelector("#IVI2 svg").setAttribute("stroke", "white");
}
