let readline = require('readline');
let fs = require('fs');

let rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', (line) => {
  let result = line.split("").reverse().join("");
  console.log(result);
})