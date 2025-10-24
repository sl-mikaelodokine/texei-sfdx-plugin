#!/usr/bin/env node

import { execute } from '@oclif/core';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

process.env.NODE_ENV = 'development';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Parse command arguments
const args = process.argv.slice(2);
const parsedArgs = [];

// Handle arguments properly
for (const arg of args) {
  // Skip empty arguments
  if (!arg || arg.trim() === '') {
    continue;
  }

  if (arg.includes(' ')) {
    // Split arguments that contain spaces into separate parts
    // This handles the case where multiple arguments are passed as a single string
    const parts = arg.split(' ').filter((part) => part.trim() !== '');
    parsedArgs.push(...parts);
  } else {
    parsedArgs.push(arg);
  }
}

await execute({
  dir: rootDir,
  args: parsedArgs,
});
