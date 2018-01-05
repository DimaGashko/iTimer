"use strict"

var gulp = require('gulp');
var rename = require('gulp-rename');
var notify = require('gulp-notify');

var revAppend = require('gulp-rev-append');
var rev = require('gulp-rev');

var livereload = require('gulp-livereload');
var connect = require('gulp-connect');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['connect', 'html', 'style', 'watch']);

gulp.task('style', () => {
	gulp.src('app/sass/main.sass')
		.pipe(sass().on('error', (e) => console.log(e)))
		.pipe(autoprefixer('last 2 versions', '> 1 %', 'ie 9'))
		.pipe(rename('main.css'))
		.pipe(gulp.dest('app/css'))
		.pipe(connect.reload())
		.pipe(notify('Done!'));
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

gulp.task('revAppend', () => {
	gulp.src('app/index.html')
		.pipe(revAppend())
		.pipe(gulp.dest('app/'));
});

gulp.task('rev', () => {
	gulp.src('app/index.html')
		.pipe(rev())
		.pipe(gulp.dest('app/'));
});

gulp.task('watch', () => {
	gulp.watch('app/sass/*', ['style']);
	gulp.watch('app/index.html', ['html']);
});