"use strict"

var gulp = require('gulp');
var rename = require('gulp-rename');
var notify = require('gulp-notify');

var livereload = require('gulp-livereload');
var connect = require('gulp-connect');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['connect', 'html', 'css', 'watch']);

gulp.task('style', () => {
	gulp.src('app/sass/*.sass')
		.pipe(concatCss('main.css'))
		.pipe(autoprefixer('last 2 versions', '> 1 %', 'ie 9'))
		.pipe(rename('main.min.css'))
		.pipe(gulp.dest('app/css'))
		.pipe(connect.reload())
		.pipe(notify('Default Done!'));
});

gulp.task('html', () => {
	gulp.src('app/index.html')
		.pipe(connect.reload());
})

gulp.task('connect', () => {
	connect.server({
		root: 'app',
		livereload: true,
	});
});

gulp.task('watch', () => {
	gulp.watch('app/sass/*', ['style']);
	gulp.watch('app/index.html', ['html']);
});