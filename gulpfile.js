'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var stripCssComments = require('gulp-strip-css-comments');
var uncss = require('gulp-uncss');

// CSS

gulp.task('css', function() {
  return gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css', 'public/css/main.css'])
    .pipe(minifyCSS())
    .pipe(stripCssComments())
    .pipe(concat('style.css'))
    .pipe(uncss({
            html: ['public/index.html']
    }))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('public/css'));
});

// JavaScript

gulp.task('js', function() {
  return browserify('./public/js/main.js')
    .bundle()
    .pipe(source('appp.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('default', ['css', 'js']);