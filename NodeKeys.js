//////////
//Export//
//////////

let KHA = [];
let KHG = {};
let KHGO = {}; //Once value 'used' all functions using KHGO must include KHGO.<key> = false;

module.exports = {
	KHA: KHA,
	KHG: KHG,
	KHGO: KHGO,
};
//////////
//Import//
//////////

const clear = require("../Tools/Clear.js")
const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
//Enables raw mode making terminal process characters as single characters.
process.stdin.setRawMode(true)
process.stdin.resume()


process.stdin.on('keypress', (str, key) => {
	if (key.ctrl && key.name === 'u') {
		clear.clear();
	}
	if (key.ctrl && key.name === 'c') {
		process.exit(0);
	}
	if (key.name) {
		KHG[key.name] = true;function disableKeyboard() {
			process.stdout.write = () => {};
		}
		function enableKeyboard() {
			process.stdout.write = originalWrite;
		}
		KHGO[key.name] = true;
		const index = KHA.indexOf(key.name);
		if (index === -1) {
			KHA.unshift(key.name);
		}
		setTimeout(() => {
			KHG[key.name] = false;
			KHGO[key.name] = false;
			const index = KHA.indexOf(key.name);
			if (index !== -1) {
				KHA.splice(index, 1);
			}
		}, 100);
	}
});
