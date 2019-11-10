const fs = require("fs");
const chroma = require("chroma-js");

const outputPath = "../static/data/shares.json";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

let array = [...Array(200)].map(x => {
  const random = chroma.hsl(
    getRandomArbitrary(0, 360),
    getRandomArbitrary(0.7, 1),
    getRandomArbitrary(0.6, 0.9)
  );
  return { amount: 100, color: chroma(random).hex() };
});

console.log(array);
fs.writeFileSync(outputPath, JSON.stringify(array));
