var express = require('express');
var files = require('./files');
var testFactory = require('./testFactory');
var TestEngine = require('./testEngine');

module.exports.runTests = function() {
	app = express();
	app.use(express.static('/Users/roneill/documents/src/sentest/sample-app'));

	//app.get('/', function(req, res){
	//	res.send(test.test);
	//});

	app.listen(8000);

	//Start app in phantom
	var appTarget = process.argv[3];

	//Get test files from directory
	var testDir = process.argv[2];
	var testFiles = files.getTestFiles(testDir);

	//Load test files as modules, validate, and build Test objects	
	testFiles.forEach(function(filename){
		var testModule = require(filename);
		var tests = testFactory.buildTests(testModule, filename);

		//Run tests	
		var testEngine = new TestEngine();
		tests.forEach(function(test){
			testEngine.run(test);
		});
	});

	//TODO: emit results of test engine as json

}


