import { transformAndMove } from './service.js';

const csvFile = 'csv/100SalesRecords.csv';
const toFile = 'text.txt';

transformAndMove(csvFile, toFile);