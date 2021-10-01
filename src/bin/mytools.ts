#!/usr/bin/env node

import '../update-notifier';
import program from 'commander';
import ora from 'ora';
import { resolve as pathResolve, isAbsolute } from 'path';
import { toUnix } from 'upath';

import { converter } from '../index';

const pkg = require('../../package.json');

program
  .version(pkg.version)
  .description('An easy CLI tool to convert .log files to .json')
  .arguments('<input-log-file>')
  .action(handle)
  .option(
    '-o, --output <file>',
    'Relative or absolute file path. If not provided, a new JSON file with similar name is created.'
  );

program.parse(process.argv);

async function handle(file: string) {
  const spinner = ora('Drinking file ..').start();
  
  const dest = await converter(
    pathResolver(file),
    program.output ? pathResolver(program.output) : undefined
  );
  spinner.succeed(`Output file created at: ${dest}`);
}

function pathResolver(file: string): string {
  const swagFilePath = isAbsolute(file) // is absolute path
    ? toUnix(file)
    : toUnix(pathResolve(process.cwd(), file));
  return swagFilePath;
}
