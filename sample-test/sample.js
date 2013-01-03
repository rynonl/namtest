module.exports.setUp = function() {
	//Store Mocks
};

module.exports.tests = [
	function sampleTest1() {
		document.assert.areEqual(2, 2);
		document.assert.areEqual(3, 3);
	},
	function sampleTest2() {		
		document.assert.areEqual("Hello", "Goodbye");
	}
];

module.exports.tearDown = function() {
	
};