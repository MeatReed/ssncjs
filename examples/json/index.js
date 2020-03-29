const ssnc = require('../../index.js')
const fs = require("fs");
let serials = fs.readFileSync("./serials.json");

let serialsParse = JSON.parse(serials);


console.log(ssnc.check(serialsParse, 'XAJ4 0030042820'))