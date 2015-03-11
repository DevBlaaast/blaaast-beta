/* Load plugins */
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  watch = require('gulp-watch'),
  jshint = require('gulp-jshint'),
  notify = require('gulp-notify'),
  concat = require('gulp-concat'),
  plumber = require('gulp-plumber'),
  uncss = require('gulp-uncss'),
  zopfli = require('gulp-zopfli'),
  connect = require('gulp-connect'),
  minifyhtml = require('gulp-minify-html'),
  inlinesource = require('gulp-inline-source'),
  imagemin = require('gulp-imagemin'),
  uglify = require('gulp-uglify'),
  minifyCSS = require('gulp-minify-css'),
  pngquant = require('imagemin-pngquant'),
  addsrc = require('gulp-add-src');

gulp.task('connect', function() {
  return connect.server({
    port: 3000,
    livereload: true
  });
});

gulp.task('css', function() {
  return gulp.src('./scss/main.scss')
    .pipe( plumber() )
    .pipe( sass() )
    .pipe( gulp.dest('./build/css') )
    .pipe( connect.reload() )
    .pipe( notify('CSS task complete!') )
});


gulp.task('img', function() {
  return gulp.src('img/**/*')
    .pipe( plumber() )
    .pipe( imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()]
    }))
    .pipe( gulp.dest('img') );
});

gulp.task('js', function() {
  return gulp.src('./js/**/*.js')
    .pipe( plumber() )
    .pipe( concat('all.js') )
    .pipe( jshint() )
    .pipe( jshint.reporter('default') )
    .pipe( gulp.dest('./build/js/') )
    .pipe( connect.reload() )
    .pipe( notify('JS task complete!') )
});

gulp.task('html', function() {
  return gulp.src('./*.html')
    .pipe( plumber() )
    .pipe( connect.reload() )
});

gulp.task('uncss', function() {
  return gulp.src('./build/css/*.css')
    .pipe( plumber() )
    .pipe( uncss({
      html: ['./build/*.html'],
      // To make Bootstrap work
      ignore: [
        '.fade',
        '.fade.in',
        '.collapse',
        '.collapse.in',
        '.collapsing',
        '.alert-danger',
        /\.open/
      ]
    }) )
    .pipe( gulp.dest('./build/css') )
});

gulp.task('minify-css', function() {
  return gulp.src('./build/css/*.css')
    .pipe( plumber() )
    .pipe( minifyCSS() )
    .pipe( gulp.dest('./build/css') )
});

gulp.task('uglify', function() {
  return gulp.src('./js/*.js')
    .pipe( plumber() )
    .pipe( uglify() )
    .pipe( addsrc('./js/vendor/*.js') )
    .pipe( concat('all.js') )
    .pipe( gulp.dest('./build/js') )
});


/* Default task */
gulp.task('default', ['connect', 'watch'], function() {
  gulp.start('css', 'js');
});

/* Build static resources */
gulp.task('build-resources', ['css']);

/* Compress static resources */
gulp.task('compress-resources', ['uncss', 'uglify'], function() {
  gulp.start('minify-css');
});

/* Deploy task */
gulp.task('deploy', ['build-resources'], function() {
  gulp.start('compress-resources');
});

/* Watch task */
gulp.task('watch', function() {
  gulp.watch('./scss/**/*.scss', ['css']);
  gulp.watch('./js/**/*.js', ['js']);
  gulp.watch('./*.html', ['html']);
});
