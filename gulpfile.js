var gulp = require('gulp');
//var webpack = require('webpack-stream');
var browserSync = require('browser-sync');
//var gulpSequence = require('gulp-sequence');
var nodemon = require('gulp-nodemon');

gulp.task('default', ['browser-sync'], function() {

})

gulp.task('browser-sync', ['nodemon'],function() {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
        files: ["public/**/*.*"],
        browser: "chrome.exe",
        port: 5000,
	});
});

gulp.task('nodemon', function (cb) {
	
	var started = false;
	
	return nodemon({
		script: './bin/www'
	}).on('start', function () {
      browserSync.reload();
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true; 
		} 
	});
});