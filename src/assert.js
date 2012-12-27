//Asserts library

function Assert() {
	this.results = [];
}

Assert.prototype = {

	areEqual: function(expect, actual){
		if(expect == actual){
			this._testPass();
		}
		else {
			this._testFail(expect, actual, 'areEqual');
		}
	},

	areNotEqual: function(expect, actual){
		if(expect != actual){
			this._testPass();
		}
		else {
			this._testFail(expect, actual, 'areNotEqual');
		}
	},

	areEqualStrict: function(expect, actual){
		if(expect === actual){
			this._testPass();
		}
		else {
			this._testFail(expect, actual, 'areEqual');
		}
	},

	areNotEqualStrict: function(expect, actual){
		if(expect !== actual){
			this._testPass();
		}
		else {
			this._testFail(expect, actual, 'areNotEqual');
		}
	},

	isTrue: function(actual){
		if(actual){
			this._testPass();
		} else {
			this._testFail(expect, actual, 'isTrue');
		}
	},

	isFalse: function(actual){
		if(!actual){
			this._testPass();
		} else {
			this._testFail(expect, actual, 'isFalse');
		}
	},

	isDefined: function(actual){
		if(typeof actual !== 'undefined'){
			this._testPass();
		} else {
			this._testFail(expect, actual, 'isTrue');
		}
	},

	isNotDefined: function(actual){
		if(typeof actual === 'undefined'){
			this._testPass();
		} else {
			this._testFail(expect, actual, 'isTrue');
		}
	},

	_testFail: function(expect, actual, assertion){
		this.results.push({result: 'fail', 
												expect: expect, 
												actual: actual, 
												assertion: assertion});

	},

	_testPass: function(){
		this.results.push({result: 'pass'});
	}
}

module.exports = Assert;