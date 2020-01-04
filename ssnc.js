const fs = require("fs");
const {
    check
} = require('./serial_checker');

let serials = fs.readFileSync("serials.json");

let serialsParse = JSON.parse(serials);

var args = process.argv.slice(2);

let checkSerial = check(serialsParse, args)

console.log(checkSerial)