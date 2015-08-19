'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');

gulp.task('sass', function () {
  gulp.src('./sass/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('watch', function () {
   gulp.watch('sass/*.scss', ['sass']);
});
