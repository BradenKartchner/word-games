// get all words that have exactly 5 letters into a JS object

import * as fs from "node:fs";

const rawData = fs.readFileSync("./public/words_dictionary.json", "utf-8");
const myData = JSON.parse(rawData);

type wordRecord = Record<string, number>;
const allRawData: wordRecord = myData as wordRecord;

const allFiveLetterWords: wordRecord = {};
const filteredData = Object.keys(allRawData).map((key) => {
	if (key.length === 5) {
		allFiveLetterWords[key] = 1;
	}
});

console.log("length of filtered data:", filteredData.length);

fs.writeFileSync("./outputFiveLetters.js", JSON.stringify(allFiveLetterWords));
