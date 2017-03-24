(function() {

  'use strict';

  var gulp              = require('gulp'),
      uglify            = require('gulp-uglify'),
      browserify        = require('browserify'),
      source            = require('vinyl-source-stream'),
      buffer            = require('vinyl-buffer'),
      concat            = require('gulp-concat'),
      rename            = require('gulp-rename'),
      minifyCSS         = require('gulp-minify-css'),
      stripCssComments  = require('gulp-strip-css-comments');

  // CSS

  gulp.task('css', function() {
    return gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css', 'public/css/main.css'])
      .pipe(minifyCSS())
      .pipe(stripCssComments())
      .pipe(concat('style.css'))
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

})();