#!/usr/bin/env node

var argv = require('optimist')
						.usage('Run namtest suite.\nUsage: $0 {path/to/tests} [arguments]')
						.demand('d')
						.alias('d', 'dir')
						.describe('d', 'Test directory')
						.alias('t', 'target')
						.describe('t', 'App entry target')
						.default('t', 'index.html')
						.argv;

var namtest = require('../lib/index.js');

//Load app
console.log('Work Dir: ' + process.cwd());

//Run tests
console.log('Running Tests');

namtest.runTests(argv.d);