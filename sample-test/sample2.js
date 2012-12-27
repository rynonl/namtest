module.exports.setUp = function() {
	//Store Mocks
};

module.exports.tests = [
	function sampleTest11(assert) {
		assert.areEqual(1, 2);
	},
	function sampleTest21(assert) {		
		assert.areEqual("Hello", "Hello");
	}
];

module.exports.tearDown = function() {
	
};