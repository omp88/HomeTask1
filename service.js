const csv = require('csvtojson')
let fs = require('fs');


export function transformAndMove(fromFile, toFile) {

    csv()
        .fromFile(fromFile)
        .on('data', (data) => {
            fs.appendFileSync(toFile, data);
        })
        .on('error', (error) => {
            console.log(error);
        })
        .on('done', () => {
            console.log("Done");
        });
}