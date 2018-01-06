"use strict";

const $ = require('gulp-load-plugins')();
const gulp = require('gulp');

module.exports = function(options) {
	return function() {
		return gulp.src(options.src)
			.pipe($.svgSprite({
				mode: {
					symbol: {
						sprite: "app/img/sprite.svg",
						render: {
							sass: {
								dest:'app/img/_sprite.sass',
								//template: assetsDir + "sass/templates/_sprite_template.sass"
							}
						}
					}
				}
			}))
			.pipe(gulp.dest(options.dst));
	}
}


