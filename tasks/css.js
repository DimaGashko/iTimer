"use strict";

const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const combine = require('stream-combiner2').obj;

module.exports = function(options) {
	return function() {
		return combine(
		
			gulp.src(options.src),
			$.sass(),
			$.autoprefixer('last 2 versions', '> 1 %', 'ie 9'),
			$.rename('main.css'),
			gulp.dest(options.dst),
			$.connect.reload()
		
		).on('error', $.notify.onError((err) => {
			return {
				title: options.taskName,
				message: err.message,			
			}			
		}));
	}
}
/*
gulpTask(
	gulp.src(options.src),
	$.sass(),
	$.autoprefixer('last 2 versions', '> 1 %', 'ie 9'),
	$.rename('main.css'),
	gulp.dest('app/css'),
	$.connect.reload()
);
*/


