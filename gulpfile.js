/* Load plugins */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    jshint = require('gulp-jshint'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    uncss = require('gulp-uncss'),
    zopfli = require("gulp-zopfli"),
    connect = require('gulp-connect'),
    minifyhtml = require('gulp-minify-html'),
    inlinesource = require('gulp-inline-source'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

gulp.task('connect', function() {
  connect.server({
    port: 3000,
    livereload: true
  });
});

gulp.task('css', function() {
    return gulp.src('./scss/main.scss')
        .pipe(plumber())
        .pipe( sass() )
        .pipe( gulp.dest('./build/css') )
        .pipe( connect.reload() )
        .pipe( notify('CSS task complete!') )
});


gulp.task('img', function() {
    return gulp.src('img/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('img'));
});

gulp.task('js', function() {
    return gulp.src('./js/**/*.js')
        .pipe(plumber())
        .pipe( concat('all.js') )
        .pipe( jshint() )
        .pipe( jshint.reporter('default') )
        .pipe( gulp.dest('./build/js/') )
        .pipe( connect.reload() )
        .pipe( notify('JS task complete!') )
});

gulp.task('html', function() {
    return gulp.src('./*.html')
        .pipe( connect.reload() )
});

gulp.task('uncss', function() {
    return gulp.src('./build/css/*.css')
        .pipe( uncss({ html: ['./build/*.html'] }) )
        .pipe( gulp.dest('./build/css') )
});

gulp.task('minify', function() {
    return gulp.src('./*.html')
        .pipe( inlinesource( { compress: true } ) )
        .pipe( minifyhtml() )
        .pipe( gulp.dest('./build') )
});

gulp.task('compress', function() {
    return gulp.src('./*.html')
        .pipe( inlinesource( { compress: true } ) )
        .pipe( zopfli() )
        .pipe( minifyhtml() )
        .pipe( gulp.dest('./') )
});

/* Default task */
gulp.task('default', ['connect', 'watch'], function() {
    gulp.start('css', 'js');
});

/* Deploy task */
gulp.task('deploy', ['connect', 'css', 'js'], function() {
    gulp.start('uncss', 'minify', 'compress');
});

/* Watch task */
gulp.task('watch', function() {
    gulp.watch('./scss/**/*.scss', ['css']);
    gulp.watch('./js/**/*.js', ['js']);
    gulp.watch('./*.html', ['html']);
});
