module.exports.setUp = function() {
	//Store Mocks
};

module.exports.tests = [
	function sampleTest1(assert) {
		
		assert.areEqual(2, 2);
		assert.areEqual(3, 3);
		return assert;
	},
	function sampleTest2(assert) {
		
		assert.areEqual("Hello", "Goodbye");
		return assert;
	}
];

module.exports.tearDown = function() {
	
};