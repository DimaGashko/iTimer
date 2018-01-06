"use strict";

const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const combine = require('stream-combiner2').obj;

module.exports = function(options) {
	return function() {
		return gulp.src(options.src)
			pipe($.connect.reload());
		
	}
}


