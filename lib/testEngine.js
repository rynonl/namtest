var Assert = require('./assert');

function TestEngine(phapp) {
	//TODO: Aggregate all results and build function to return them

	this.phapp = phapp;
}

TestEngine.prototype = {	

	phapp: {},

	run: function(test) {
		
		var assert = new Assert();

		evaluate(this.phapp, 
			function(assert){
				assert.areEqual(2,2);
				return 'boom';
			}
			//test.test
		,

		//var results = this.phapp.evaluate(test.test(assert),
			//function(test, assert){
			//test.setUp();
			//return assert;
			//test.test(assert);		

			//test.tearDown();
			//return "yup";
			//},
		function(err, result){
			console.log(result);
		}, assert);		

		_recordResults(test, assert);		

	}	
}

function evaluate(page, func, cb) {
    var args = [].slice.call(arguments, 2);
    var fn = "function() { return (" + func.toString() + ").apply(this, " + JSON.stringify(args) + ");}";
    return page.evaluate(fn, cb);
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