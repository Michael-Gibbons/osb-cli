import { Command } from 'commander';
const program = new Command();

const route =

  program
    .command('route')
    .description('Creates a new express route')
    .action(() => {
      console.log('Create new express route')
    });

export default route