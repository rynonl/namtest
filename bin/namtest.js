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

//TODO: Allow relative dir paths for d
namtest.run(argv.d, 
    '/users/roneill/documents/src/namtest/sample-app',
    argv.t);