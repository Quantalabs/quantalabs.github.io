// Create an SVG renderer and attach it to the DIV element named "boo".
let elem = document.getElementById("I-iii");
let rend = new Renderer(elem, Renderer.Backends.SVG);

// Configure the rendering context.
rend.resize(220, 200);
let cont = rend.getContext();

// Create a stave of width 400 at position 10, 40 on the canvas.
let s = new Stave(0, 40, 220);

// Add a clef and time signature.
s.addClef("treble");
// Connect it to the rendering context and draw!
s.setContext(cont).draw();

// Create the notes
let collections = [
	// A C-Major chord.
	new StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" }),
	new StaveNote({ keys: ["e/4", "g/4", "b/3"], duration: "q" }),
];
let names = [];

// Create a voice in 4/4 and add above notes
let part = new Voice({ num_beats: 2, beat_value: 4 });
part.addTickables(collections);

// Format and justify the notes to 400 pixels.
new Formatter().joinVoices([part]).format([part], 200);

// Render voice
part.draw(cont, s);

if (
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches
) {
	document.querySelector("#I-iii svg").setAttribute("fill", "white");
	document.querySelector("#I-iii svg").setAttribute("stroke", "white");
}
