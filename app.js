/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const nextPath = path.join(__dirname, 'node_modules', '.bin', 'next');
process.argv.length = 1;
process.argv.push(nextPath, 'start');
process.env.NODE_ENV = 'production';
require(nextPath);