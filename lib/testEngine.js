//var Assert = require('./assert');

function TestEngine(phapp) {
	//TODO: Aggregate all results and build function to return them

	this.phapp = phapp;
}

TestEngine.prototype = {	

	phapp: {},

	run: function(test) {
		console.log(test.test);
		this.phapp.evaluate(test.test, 
			function(err) {
        if(err){
					console.log('Error: ' + err);
					process.exit(1);
        }
      });
	}	
}

//TODO: Return list of results
function _recordResults(test, app){
		//TODO: Only emit one result per test, instead of one result per assert
		for (i = 0; i < assert.results.length; i++){
			var result = assert.results[i];
		
			if (result.result == 'pass'){
				console.log('Test Passed: ' + test.filename + ':' + test.name);
			} else {
				var red, blue, reset;
				red   = '\033[31m';
				reset = '\033[0m';
				console.log(red + 'Test Failed: ' + test.filename + ':' + test.name);
				console.log('---Expected : ' + result.expect);
				console.log('---Actual   : ' + result.actual);
				console.log('---Assertion: ' + result.assertion + reset);
			}
		}
	}

module.exports = TestEngine;