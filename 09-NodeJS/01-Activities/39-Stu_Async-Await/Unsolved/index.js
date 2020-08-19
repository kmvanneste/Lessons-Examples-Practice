const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function combineAnimals() {
  try {
    const cat = await readFileAsync("cat.jason", "utf8");
    const dog = await readFileAsync("dog.jason", "utf8");
    const goldfish = await readFileAsync("goldfish.jason", "utf8");
    const hamster = await readFileAsync("hamster.jason", "utf8");

    



  } catch(err) {
    console.log(err);
  }
}

combineAnimals();
