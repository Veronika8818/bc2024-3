const fs = require('fs');
const path = require('path');
const { Command } = require('commander');
const program = new Command();


program
  .requiredOption('-i, --input <path>', 'Path to the input file')
  .option('-o, --output <path>', 'Path to the output file')
  .option('-d, --display', 'Display the result in the console');

program.parse(process.argv);

const options = program.opts();

const inputFilePath = path.resolve(options.input);

if (!options.input) {
  console.error('Please, specify input file');
  process.exit(1);
}


if (!fs.existsSync(options.input)) {
  console.error('Cannot find input file');
  process.exit(1);
}


if (!options.output && !options.display) {
  process.exit(0);
}


if (options.display) {
  console.log(result);
}

if (options.output) {
  fs.writeFileSync(outputFilePath, result);
}

const outputFilePath = options.output ? path.resolve(options.output) : 'output.txt';

if (options.output) {
  try {
    fs.writeFileSync(outputFilePath, result);
    console.log(`Result saved to ${outputFilePath}`);
  } catch (err) {
    console.error(`Error writing to file: ${err.message}`);
  }
}


let minAsset = inputData['reserves'].reduce((min, asset) => {
  return asset.value < min.value ? asset : min;
}, inputData['reserves'][0]);


const result = `${minAsset.name}:${minAsset.value}`;


let inputData;
try {
  inputData = JSON.parse(fs.readFileSync(inputFilePath, 'utf-8'));
} catch (error) {
  console.error('Error reading or parsing input file');
  process.exit(1);
}
