module.exports.setUp = function() {
	//Store Mocks
};

module.exports.tests = [
	function sampleTest11(assert) {
		
			assert.areEqual(1, 2);
		return assert;
	},
	function sampleTest21(assert) {		
		
		assert.areEqual("Hello", "Hello");
		return assert;
	}
];

module.exports.tearDown = function() {
	
};