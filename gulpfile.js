/* Load plugins */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    jshint = require('gulp-jshint'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat');
    // uncss = require('gulp-uncss'),
    // zopfli = require("gulp-zopfli"),
    // connect = require('gulp-connect'),
    // minifyhtml = require('gulp-minify-html'),
    // inlinesource = require('gulp-inline-source');

gulp.task('css', function() {
    return gulp.src('./scss/main.scss')
        .pipe( sass() )
        .pipe( gulp.dest('./build/css') )
        // .pipe( connect.reload() )
        // .pipe( notify('CSS task complete!') )
});

gulp.task('js', function() {
    return gulp.src('./js/**/*.js')
        .pipe( concat('all.js') )
        .pipe( jshint() )
        .pipe( jshint.reporter('default') )
        .pipe( gulp.dest('./build/js/') );
        // .pipe( connect.reload() )
        // .pipe( notify('JS task complete!') )
});

// gulp.task('html', function() {
//     return gulp.src('./src/*.html')
//         .pipe( connect.reload() )
//         .pipe( gulp.dest('./build') )
// });


// gulp.task('uncss', function() {
//     return gulp.src('./build/css/*.css')
//         .pipe( uncss({ html: ['./build/*.html'] }) )
//         .pipe( gulp.dest('./build/css') )
// });

// gulp.task('minify', function() {
//     return gulp.src('./build/*.html')
//         .pipe( inlinesource( {compress: true} ) )
//         .pipe( minifyhtml() )
//         .pipe( gulp.dest('./public') )
// });

// gulp.task('compress', function() {
//     return gulp.src('./public/*.html')
//         .pipe( zopfli() )
//         .pipe( gulp.dest('./public') )
// });

/* Default task */
gulp.task('default', [/*'connectBuild',*/ 'watch'], function() {
    gulp.start('css', 'js');
});

/* Deploy task */
gulp.task('deploy', ['connectPublic'], function() {
    gulp.start('uncss', 'minify', 'compress');
});

/* Watch task */
gulp.task('watch', function() {
    gulp.watch('./scss/**/*.scss', ['css']);
    gulp.watch('./js/**/*.js', ['js']);
    // gulp.watch('./*.html', ['html']);
});
