var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
    var pack = browserify({
        entries: './es6/jsi.js',
            extensions: ['.js'],
            debug: true,
            standalone:"Jsi"
        })
        .transform('babelify', {
            presets: ['es2015']
        })
        .bundle()
        .pipe(source('Jsi.js'))
        .pipe(gulp.dest('dist'));

    var pack2 = browserify({
        entries: './es6/jsi.js',
            extensions: ['.js'],
            debug: false,
            standalone:"Jsi"
        })
        .transform('babelify', {
            presets: ['es2015']
        })
        .transform('uglifyify')
        .bundle()
        .pipe(source('Jsi.min.js'))
        .pipe(gulp.dest('dist'));

    return (pack && pack2);
});

gulp.task('watch', ['build'], function () {
    gulp.watch('*.jsx', ['build']);
});

gulp.task('default', ['build']);