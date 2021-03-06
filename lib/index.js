var express = require('express');
var PhantomApp = require('../lib/ph_app.js');
var files = require('./files');
var testFactory = require('./testFactory');
var TestEngine = require('./testEngine');

var testDir = '';

module.exports.run = function(testDirec, testApp, appTarget) {
	testDir = testDirec;

	//Start app in phantom
	var appTarget = process.argv[3];
	app = express();
	app.use(express.static(testApp));
	app.listen(8004);

	//Loading app 
	PhantomApp.getPhantomApp(
	  appTarget,
	  onPhantomAppCreated);	

	//TODO: emit results of test engine as json

}

function onPhantomAppCreated(phapp){
	setTimeout(function() {
		runTests(phapp);
  }, 1000);  
}

function runTests(phapp){
	//Get test files from directory
	var testFiles = files.getTestFiles(testDir);

	var testEngine = new TestEngine(phapp);

	//Load test files as modules, validate, and build Test objects	
	testFiles.forEach(function(filename){
		var testModule = require(filename);
		var tests = testFactory.buildTests(testModule, filename);
		
		//Run tests	
		tests.forEach(function(test){
			testEngine.run(test);
		});
	});

	//Write results to console
	phapp.evaluate(function(){
		return document.assert;
	}, function(err, result){
		console.dir(result)
	});
}

