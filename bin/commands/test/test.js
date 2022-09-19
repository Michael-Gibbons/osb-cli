import { Command } from 'commander';
const program = new Command();

const test =

  program
    .command('test')
    .description('Test Command')
    .action(() => {
      console.log('This is a test command')
    });

export default test