/**
* data-static - gulpfile.js
* Created by pampang(pangweizhan) on 2015/11/26.
*/

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var shrink = require('gulp-cssshrink');

// 静态文件打包合并
var webpack = require('gulp-webpack');

// // MD5戳
// var rev = require('gulp-rev');
// var revCollector = require('gulp-rev-collector');
var runSequence = require('run-sequence');
var clean = require('gulp-clean')

var config = require('./webpack.config');

gulp.task('clean', function(){
	return gulp.src('./build')
				.pipe(clean({force: true}));
});

gulp.task('bundle', function(){
	gulp.src('./app')
		.pipe(webpack(config))
		.pipe(gulp.dest('./build'));
});

gulp.task('default', function(){
	runSequence('clean', 'bundle');
	gulp.watch(['./app/**'], function(){
		runSequence('clean', 'bundle');	
	})
})