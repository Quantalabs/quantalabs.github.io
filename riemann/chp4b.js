// Create an SVG renderer and attach it to the DIV element named "boo".
elem = document.getElementById("morningBell");
rend = new Renderer(elem, Renderer.Backends.SVG);

// Configure the rendering context.
rend.resize(410, 200);
cont = rend.getContext();

// Create a stave of width 400 at position 10, 40 on the canvas.
s = new Stave(5, 40, 400);

// Add a clef and time signature.
s.addClef("treble");

// Connect it to the rendering context and draw!
s.setContext(cont).draw();

// Create the notes
collections = [
	// A C-Major chord.
	new StaveNote({ keys: ["G#/4", "b/4", "D#/5"], duration: "q" })
		.addModifier(new Accidental("#"), 0)
		.addModifier(new Accidental("#"), 2),
	new StaveNote({ keys: ["e/5", "g/4", "b/4"], duration: "q" }).addModifier(
		new Accidental("n"),
		1,
	),
	new StaveNote({ keys: ["G#/4", "b/4", "D#/5"], duration: "q" })
		.addModifier(new Accidental("#"), 0)
		.addModifier(new Accidental("#"), 2),
	new StaveNote({ keys: ["d/5", "f#/4", "a/4"], duration: "q" })
		.addModifier(new Accidental("#"), 1)
		.addModifier(new Accidental("n"), 0),
	new StaveNote({ keys: ["e/4", "a/4", "c#/5"], duration: "q" }).addModifier(
		new Accidental("#"),
		2,
	),
	new StaveNote({ keys: ["e/4", "a/4", "c/5"], duration: "q" }).addModifier(
		new Accidental("n"),
		2,
	),
];
chordNames = ["G#m", "Em", "G#m", "D", "A", "Am"];
names = [];

for (let name of chordNames) {
	names.push(new ChordSymbol().setVertical("top").addText(name));
}
for (let i = 0; i < collections.length; i++) {
	collections[i].addModifier(names[i], 0);
}
// Create a voice in 4/4 and add above notes
part = new Voice({ num_beats: 6, beat_value: 4 });
part.addTickables(collections);

// Format and justify the notes to 400 pixels.
new Formatter().joinVoices([part]).format([part], 340);

// Render voice
part.draw(cont, s);

if (
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches
) {
	document.querySelector("#morningBell svg").setAttribute("fill", "white");
	document.querySelector("#morningBell svg").setAttribute("stroke", "white");
}

// Create an SVG renderer and attach it to the DIV element named "boo".
elem = document.getElementById("morningBellIntro");
rend = new Renderer(elem, Renderer.Backends.SVG);

// Configure the rendering context.
rend.resize(410, 200);
cont = rend.getContext();

// Create a stave of width 400 at position 10, 40 on the canvas.
s = new Stave(5, 40, 400);

// Add a clef and time signature.
s.addClef("treble");

// Connect it to the rendering context and draw!
s.setContext(cont).draw();

// Create the notes
collections = [
	// A C-Major chord.
	new StaveNote({ keys: ["A/4", "C/4", "E/4"], duration: "q" }),
	new StaveNote({ keys: ["G#/4", "E/4", "C#/4"], duration: "q" })
		.addModifier(new Accidental("#"), 0)
		.addModifier(new Accidental("#"), 2),
	new StaveNote({ keys: ["G/4", "b/3", "D/4"], duration: "q" }).addModifier(
		new Accidental("n"),
		0,
	),
	new StaveNote({ keys: ["d/4", "f#/4", "a/3"], duration: "q" }).addModifier(
		new Accidental("#"),
		1,
	),
];
chordNames = ["Am", "C#m", "G", "D"];
names = [];

for (let name of chordNames) {
	names.push(new ChordSymbol().setVertical("top").addText(name));
}
for (let i = 0; i < collections.length; i++) {
	collections[i].addModifier(names[i], 0);
}
// Create a voice in 4/4 and add above notes
part = new Voice({ num_beats: 4, beat_value: 4 });
part.addTickables(collections);

// Format and justify the notes to 400 pixels.
new Formatter().joinVoices([part]).format([part], 340);

// Render voice
part.draw(cont, s);

if (
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches
) {
	document.querySelector("#morningBellIntro svg").setAttribute("fill", "white");
	document
		.querySelector("#morningBellIntro svg")
		.setAttribute("stroke", "white");
}

elem = document.getElementById("morningBellpt2");
rend = new Renderer(elem, Renderer.Backends.SVG);

// Configure the rendering context.
rend.resize(410, 200);
cont = rend.getContext();

// Create a stave of width 400 at position 10, 40 on the canvas.
s = new Stave(5, 40, 400);

// Add a clef and time signature.
s.addClef("treble");

// Connect it to the rendering context and draw!
s.setContext(cont).draw();

// Create the notes
collections = [
	new StaveNote({ keys: ["e/5", "g/4", "b/4"], duration: "q" }).addModifier(
		new Accidental("n"),
		1,
	),
	new StaveNote({ keys: ["G#/4", "b/4", "D#/5"], duration: "q" })
		.addModifier(new Accidental("#"), 0)
		.addModifier(new Accidental("#"), 2),
	new StaveNote({ keys: ["d/5", "f#/4", "a/4"], duration: "q" })
		.addModifier(new Accidental("#"), 1)
		.addModifier(new Accidental("n"), 0),
	new StaveNote({ keys: ["e/4", "a/4", "c#/5"], duration: "q" }).addModifier(
		new Accidental("#"),
		2,
	),
];
chordNames = ["Em", "G#m", "D", "A"];
names = [];

for (let name of chordNames) {
	names.push(new ChordSymbol().setVertical("top").addText(name));
}
for (let i = 0; i < collections.length; i++) {
	collections[i].addModifier(names[i], 0);
}
// Create a voice in 4/4 and add above notes
part = new Voice({ num_beats: 4, beat_value: 4 });
part.addTickables(collections);

// Format and justify the notes to 400 pixels.
new Formatter().joinVoices([part]).format([part], 340);

// Render voice
part.draw(cont, s);

if (
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches
) {
	document.querySelector("#morningBellpt2 svg").setAttribute("fill", "white");
	document.querySelector("#morningBellpt2 svg").setAttribute("stroke", "white");
}
