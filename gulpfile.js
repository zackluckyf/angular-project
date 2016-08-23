/* File: gulpfile.js */

// grab our gulp packages
var gulp = require('gulp'),
  gutil = require('gulp-util'),
  sass = require('gulp-sass');

gulp.task('styles', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css/'));
});

gulp.task('default', function () {
  gulp.watch('./sass/**/*.scss', ['styles']);
});
