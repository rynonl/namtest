
function Test(filename, name) {
	this.filename = filename;
	this.name = name;
	this.setUp = function() {};
	this.test = function() {};
	this.tearDown = function() {};
}

module.exports = Test;