import { Command } from 'commander';
const program = new Command();

import queue from './commands/queue/queue.js';
import route from './commands/route/route.js';

const create =

  program
    .command('create')
    .description('Creates a resource')


create.addCommand(queue)
create.addCommand(route)
create.configureHelp()

export default create