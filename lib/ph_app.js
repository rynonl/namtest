var phantom = require('node-phantom');
var express = require('express');

var appTarget = '';
var appTargetDir = '';
var finalCallback;

module.exports.getPhantomApp = function(target, callback){
	appTarget = target;
	finalCallback = callback;

	phantom.create(onPhantomCreated);
}

function onPhantomCreated(err, ph){
	if (err){
		handleError(err);
	}
	ph.createPage(onPageCreated);
}

function onPageCreated(err, page){
	if (err){
		handleError(err);
	}
	page.open('http://127.0.0.1:8001/' + appTarget, finalCallback(page));
}

function handleError(err){
	console.log(err);
	process.exit(1);
}
