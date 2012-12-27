var Assert = require('./assert');

function TestEngine() {
	//TODO: Aggregate all results and build function to return them
}

TestEngine.prototype = {	

	run: function(test) {
		
		var assert = new Assert();

		test.setUp();

		test.test(assert);		

		test.tearDown();

		_recordResults(test, assert);		

	}	
}

//TODO: Return list of results
function _recordResults(test, assert){
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