//This factory takes in a javascript object and returns a Test object
//Primary function here is validation of the object being passed in

var Test = require('./test');

module.exports = {
	//Validates testModule
	//Build list of Test objects
	buildTests: function(testModule, filename) {
		var tests = [];

		_validateTestModule(testModule, filename);
		
		testModule.tests.forEach(function(testFunc){
			var test = new Test(filename, testFunc.name);

			test.test = testFunc;

			//setUp
			if(typeof(testModule.setUp) === 'function'){
				test.setUp = testModule.setUp;
			}		

			//tearDown
			if(typeof(testModule.setUp) === 'function'){
				test.tearDown = testModule.tearDown;
			}

			tests.push(test);
		});

		return tests;

	}
}

//Ensures that the testModule has at least 1 test function
function _validateTestModule(testModule, filename){
		if(typeof(testModule.tests) === 'undefined') {
			console.log('No tests found in: ' + filename);
			console.lod('Exiting');
			process.exit();
		}
	}
