/* File: gulpfile.js */

// grab our gulp packages
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    Server = require('karma').Server;

gulp.task('styles', function() {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css/'));
});

gulp.task('jshint', function() {
    return gulp.src('./src/app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('js-fef', function() {
    return gulp.src(['./app/**/*.js', '!./app/vendor/*.js'])
        .pipe(gp_concat('concat.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('javascript', function() {
    gulp.src(['./app/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(gp_concat('sourcemaps.js'))
        .pipe(gp_uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('clean-dist', function() {
    return del([
        'dist/**/*'
    ]);
});

gulp.task('test', function(done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: false
    }, done).start();
});

gulp.task('watch-all', function() {
    gulp.watch('./app/**/*.js', ['jshint']);
    gulp.watch('./sass/**/*.scss', ['styles']);
    gulp.watch('./app/**/*.js', ['js-fef']);
    gulp.watch('./app/**/*.js', ['javascript']);
    gulp.watch('./app/**/*.js', ['test']);
});

gulp.task('default', ['watch-all', 'clean-dist']);
