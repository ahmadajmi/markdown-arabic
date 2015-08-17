'use strict';

var gulp      = require('gulp'),
    uglify       = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    concat    = require('gulp-concat'),
    rename    = require('gulp-rename'),
    stripCssComments = require('gulp-strip-css-comments');


// CSS Task

gulp.task('css', function () {
  return gulp.src(['public/css/bootstrap.min.css', 'public/css/main.css'])
  .pipe(minifyCSS())
  .pipe(stripCssComments())
  .pipe(concat('style.css'))
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest('public/css'));
});


// JS Task

gulp.task('js', function(){
  return gulp.src([
    'public/js/vendor/markdown.min.js',
    'public/js/main.js'])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
});


// Default Task
gulp.task('default', ['css', 'js']);