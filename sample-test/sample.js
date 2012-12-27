module.exports.setUp = function() {
	//Store Mocks
};

module.exports.tests = [
	function sampleTest1(assert) {
		assert.areEqual(2, 2);
		assert.areEqual(3, 3);
	},
	function sampleTest2(assert) {
		assert.areEqual("Hello", "Goodbye");
	}
];

module.exports.tearDown = function() {
	
};