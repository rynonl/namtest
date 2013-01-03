module.exports.setUp = function() {
	//Store Mocks
};

module.exports.tests = [
	function sampleTest11() {
		
		document.assert.areEqual(1, 2);
		return assert;
	},
	function sampleTest21() {		
		
		document.assert.areEqual("Hello", "Hello");
		return assert;
	}
];

module.exports.tearDown = function() {
	
};