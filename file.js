const fs = require('fs');
const { Command } = require('commander');
const program = new Command();


program
  .requiredOption('-i, --input <path>', 'Path to the input file')
  .option('-o, --output <path>', 'Path to the output file')
  .option('-d, --display', 'Display the result in the console');

program.parse(process.argv);

const options = program.opts();


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
