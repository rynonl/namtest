//Assets library

module.exports.injectTo = function(page){
	page.evaluate(function(){

		function Assert() {

			this.results = [];

			this.areEqual = function(expect, actual){
				this._recordResult(expect == actual, expect, actual, 'areEqual');
			};

			this.areNotEqual = function(expect, actual){
				this._recordResult(expect != actual, expect, actual, 'areNotEqual');
			};

			this.areEqualStrict = function(expect, actual){
				this._recordResult(expect === actual, expect, actual, 'areEqualStrict');
			};

			this.areNotEqualStrict = function(expect, actual){
				this._recordResult(expect !== actual, expect, actual, 'areNotEqualStrict');
			};

			this.isTrue = function(actual){
				this._recordResult(actual == true, 'true', actual, 'isTrue');
			};

			this.isFalse = function(actual){
				this._recordResult(actual == false, 'false', actual, 'isFalse');
			};

			this.isDefined = function(actual){
				this._recordResult(typeof actual !== 'undefined', 'undefined', actual, 'isDefined');
			};

			this.isNotDefined = function(actual){
				this._recordResult(typeof actual === 'undefined', 'defined', actual, 'isNotDefined');
			};

			this._recordResult = function(pass, expect, actual, assertion){
				this.results.push({result: pass ? 'pass' : 'fail', 
														expect: expect, 
														actual: actual, 
														assertion: assertion});

			};
		}

		document.assert = new Assert();

	});
}
