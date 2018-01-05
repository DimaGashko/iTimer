"use strict"

var gulp = require('gulp');

var rename = require('gulp-rename');
var notify = require('gulp-notify');

var wiredep = require('wiredep').stream;
var useref = require('gulp-useref');
var gulpif = require('gulp-if');

var livereload = require('gulp-livereload');
var connect = require('gulp-connect');

var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

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

gulp.task('js', () => {
	gulp.src('app/js/main.js')
		.pipe(babel())
		.pipe(gulp.dest('app/'));
});

gulp.task('build', () => {
	gulp.src('app/index.html')
		.pipe(useref())
		.pipe(gulpif('*.js', babel({
			presets: ['es2015'],
		})))
		.pipe(gulpif('*.css', minifyCss()))
		.pipe(gulp.dest('dist/'));
	
	gulp.src('app/favicon.png')
		.pipe(gulp.dest('dist/'));
		
	gulp.src('app/img/**/*.*')
		.pipe(gulp.dest('dist/img'));
});

gulp.task('watch', () => {
	gulp.watch('app/sass/*', ['style']);
	gulp.watch('app/index.html', ['html']);
});