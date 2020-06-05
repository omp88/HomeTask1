import csv from 'csvtojson';
import fs from 'fs';
import readline from 'readline';


export function transformAndMove(fromFile, toFile) {
  const writeStream = fs.createWriteStream(toFile);

  csv()
    .fromFile(fromFile)
    .on('data', (data) => {
      writeStream.write(data);
    })
    .on('error', (error) => {
      console.log(error);
    })
    .on('done', () => {
      console.log('Done');
    });
}

export function reverseInput() {
  const rl = readline.createInterface({
    input: process.stdin,
  });

  rl.on('line', (line) => {
    const result = line.split('').reverse().join('');
    console.log(result);
  });
}
