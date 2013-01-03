var phantom = require('node-phantom');
var express = require('express');
var assert = require('./assert.js');

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
	page.open('http://127.0.0.1:8004/' + appTarget, function(err, status){
			if (err){
				handleError(err);
			}

			assert.injectTo(page);
			
			finalCallback(page);
		});
}

function handleError(err){
	console.log('Error: ' + err);
	process.exit(1);
}
