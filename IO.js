/////////////////////////////////////////////////////////////////////////
//Piece of code from nodeJS to recive input and log output from console//
/////////////////////////////////////////////////////////////////////////


//////////
//Import//
//////////
const keys = require("./NodeKeys");


//////////
//Export//
//////////
module.exports = {
	say: say,
	spell: spell,
	longSpell: longSpell,
	sleep: sleep,
	ask: ask,
	disableKeyboard:disableKeyboard,
	enableKeyboard:enableKeyboard,
};


//Importamos el modulo readline de nodejs
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});



///////
//ASK//
///////

async function ask(string) {
	return new Promise((resolve) => {
		rl.question(string + "\n > ", (input) => {
			if (input === null || input === undefined || input.trim() === "") {
				//Invalid answer
				console.log("Incorrect response, please try again.");
				resolve(ask(question));  // Recursively call ask if the input is invalid
			} else {
				//Valid answer
				rl.close();
				resolve(input);
			}
		});
	});
}



///////
//Say//
///////

function say(string) {
	console.log(string);
}



/////////
//Spell//
/////////
//// /!\ asked in stack overflow: How to disable keyboard input from displaying on the terminal while still detecting keypress events in Node.js?
async function spell(string, ms, wait = true, newLine = true) {
	enableKeyboard();
	let skipped = false;
	if (newLine) say("");
	disableKeyboard()
	if (!string) { console.log("ERROR: bad string;"); return; }
	const characterArray = string.split("");

	//Skip initial spaces
	let startingPosition = 0;
	for (let i = 0; i < characterArray.length; i++) {
		if (string[i] != " ") {
			startingPosition = i;
			break;
		}
	}
	//Write character by character
	for (let i = 0; i < characterArray.length; i++) {
		enableKeyboard();
		process.stdout.write(string[i]);
		disableKeyboard();
		if (i > startingPosition) {
			if (keys.KHGO.space) { skipped = true; keys.KHGO.space = false;}
			if (!skipped) await sleep(ms);
		}
	}
	//wait until space is pressed to continue
	while (!keys.KHGO.space&&wait) {await sleep(1);} keys.KHGO.space = false;
	enableKeyboard();
}



//////////////
//Long Spell//
//////////////

//Multiple line support
async function longSpell(array, ms) {
	skipped = false;
	for (i = 0; i < array.length; i++) {
		characterArray = array[i].split("");

		//Skip initial spaces
		startingPosition = 0;
		for (j = 0; j < characterArray.length; j++) {
			if (array[i][j] != " ") {
				startingPosition = j;
				break;
			}
		}

		//Write character by character
		for (j = 0; j < characterArray.length; j++) {
			process.stdout.write(array[i][j]);
			if (j > startingPosition) {
				if (!skipped) await sleep(ms);
				if (keys.KHG.space === true) { skipped = true }
			}
		}
		say("");
	}
}


/////////
//Sleep//
/////////

function sleep(ms = 40) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


////////////////////
//Disable keyboard//
////////////////////

//To disable the keyboard we overwrite the write function to a empty function
//We save the implementation in a constant so we can enable it
const originalWrite = process.stdout.write;
function disableKeyboard() {
	process.stdout.write = () => {};
}
function enableKeyboard() {
	process.stdout.write = originalWrite;
}
