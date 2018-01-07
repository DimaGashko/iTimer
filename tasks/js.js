"use strict";

const $ = require('gulp-load-plugins')();
const gulp = require('gulp');

module.exports = function(options) {
	return function() {
		return gulp.src(options.src)
			.pipe($.jslint({
				white: true,
				single: true,
			}))
			.pipe($.jslint.reporter('default', {}))
			.on('error', $.notify.onError((err) => {
				return {
					title: 'lint',
					message: err.message,
				}
			}));
			.pipe($.connect.reload());
			//.pipe(gulp.dest(options.dest));
	}
}


