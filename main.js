#!/usr/bin/evn node
// load library
const lib = require("./lib.js");

console.log(`${process.argv}`);
let command = process.argv[2];
let numbers = process.argv 
    .slice(3, process.argv.length)
    .map((n) => parseFloat(n));
console.log(numbers);

if (numbers.some((n) => isNaN(n))) {
    console.log("nan error");
}

let result = null;
switch (command) {
    case "sum":
        result = lib.sum(numbers);
    case "avg":
        break;
    case "max":
        break;
    default:
        console.log("wrong");
        process.exit(1);
}
console.log(result);

