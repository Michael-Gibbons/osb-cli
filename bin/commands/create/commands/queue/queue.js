import { Command } from 'commander';
const program = new Command();

const queue =

  program
    .command('queue')
    .description('Creates a new redis queue and worker')
    .action(() => {
      console.log('Create new redis queue and worker')
    });

export default queue