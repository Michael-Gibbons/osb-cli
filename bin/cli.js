#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

import test from './commands/test/test.js'
import create from './commands/create/create.js'

program
  .name('osb')
  .usage("[global options] command")
  .description('Command line tool to help bootstrap OSB projects')
  .version('0.1.0');

program.addCommand(test)
program.addCommand(create)
// TODO: make command registration automatic
program.configureHelp()

program.parse()