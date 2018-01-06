"use strict";

const gulp = require('gulp');
//const wiredep = require('wiredep').stream;

//DEV
lrTask('css', './tasks/css', {
	src: 'app/sass/main.sass',
	dst: 'app/css',
});

lrTask('html', './tasks/html', {
	src: 'app/index.html',
});

lrTask('connect', './tasks/connect', {
	servOpt: {
		root: 'app',
		livereload: true,
		port: 8000,
	}
});

lrTask('js', './tasks/js', {
	src: 'app/js/main.js',
	dst: 'app/',
});

//BUILD
lrTask('build:useref', './tasks/build_useref', {
	src: 'app/index.html',
	dst: 'dist/',
});

lrTask('build:clean', './tasks/build_clean', {
	src: 'dist',
});

lrTask('build:img', './tasks/build_img', {
	src: ['app/**/*.{png,jpg,bmp,gif}'],
	dst: 'dist/',
});

lrTask('build:html', './tasks/build_html', {
	src: ['dist/**/*.html'],
	dst: 'dist/',
});

lrTask('build:connect', './tasks/build_connect', {
	servOpt: {
		root: 'dist/',
		livereload: false,
		port: 8888,
	}
});

gulp.task('build', gulp.series(
	'build:clean',
	gulp.parallel(gulp.series('build:useref', 'build:html'), 'build:img')
));

//WATCH
gulp.task('watch', () => {
	gulp.watch('app/sass/*', gulp.parallel('css'));
	gulp.watch('app/index.html', gulp.parallel('html'));
});

//DEFAULT
gulp.task('default', gulp.series(
	gulp.parallel('css', 'html'),
	gulp.parallel('connect', 'watch'),
));

//SYSTEM
function lrTask(taskName, path, options) {
	options = options || {};
	options.taskName = taskName;
	
	gulp.task(taskName, function(callback) {
		let task = require(path).call(this, options);
		return task(callback);
	});
}