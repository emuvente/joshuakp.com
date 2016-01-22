var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');
var webpack = require('webpack-stream');
var webpack_config = require('./webpack.config.js');

gulp.task('css', function() {
    return gulp.src('./src/styl/app.styl')
        .pipe(stylus({
             use: nib(),
             import: ['nib']
         }))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('webpack', function() {
    return gulp.src('src/client.jsx')
        .pipe(webpack(webpack_config))
        .pipe(gulp.dest('public/js/'));
});

gulp.task('default', ['css', 'webpack']);
