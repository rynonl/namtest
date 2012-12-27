var fs = require('fs');

module.exports.getTestFiles = function(directory) {
	//Test for existence of directory.  Absolute paths only for now.
	_testForDirectoryExistence(directory);

	var testDirFilenames = fs.readdirSync(directory);
	var testFiles = [];

	testDirFilenames.forEach(function(filename){
		file = directory + '/' + filename;
		testFiles.push(file);
	});
	
	console.log('Found ' + testFiles.length + ' test file(s)');

	return testFiles;
}

function _testForDirectoryExistence(directory){
	var dirExists = fs.existsSync(directory);
	if (!dirExists){
		console.log('Test directory not found: '+ directory +' The path provided must be absolute');
		process.exit();
	}
}