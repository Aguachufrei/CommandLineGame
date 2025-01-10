//////////
//Export//
//////////

let KHA = [];
let KHG = {};
let KHGO = {};//Once value 'used' all functions using KHGO must include KHGO.<key> = false;

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
process.stdin.setRawMode(true);


process.stdin.on('keypress', (str, key) => {
	if (key.ctrl && key.name === 'u') {
		clear.clear();
	}
	if (key.ctrl && key.name === 'c') {
		process.exit(0);
	}
	if (key.name) {
		KHG[key.name] = true;
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
