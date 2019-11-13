const fs = require("fs");

let rawdata = fs.readFileSync("index-list.json");
let indexList = JSON.parse(rawdata);
console.log(indexList[0]);

const outputPath = "../static/data/index-list.json";

fs.writeFileSync(outputPath, JSON.stringify(indexList));
