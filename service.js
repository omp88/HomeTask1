const csv = require('csvtojson')
const fs = require('fs');
const readline = require('readline');


export function transformAndMove(fromFile, toFile) {

    let writeStream = fs.createWriteStream(toFile);

    csv()
        .fromFile(fromFile)
        .on('data', (data) => {
            writeStream.write(data)
        })
        .on('error', (error) => {
            console.log(error);
        })
        .on('done', () => {
            console.log("Done");
        });
}

export function reverseInput(){
    let rl = readline.createInterface({
        input: process.stdin
      });
      
      rl.on('line', (line) => {
        let result = line.split("").reverse().join("");
        console.log(result);
      })
}