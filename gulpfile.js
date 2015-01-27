// gulpfile.js

var gulp = require('gulp');
var ts = require('gulp-typescript'); // (https://github.com/ivogabe/gulp-typescript)

var tsProject = { declarationFiles: true,
                  noExternalResolve: false }

gulp.task('ts-to-js-utilities', function() {
    return gulp.src('./src/ts/Utilities/*.ts')
               .pipe(ts(tsProject))
               .pipe(gulp.dest('./src/js/Utilities'));
});

gulp.task('ts-to-js-world', function() {
    return gulp.src('./src/ts/World/*.ts')
               .pipe(ts(tsProject))
               .pipe(gulp.dest('./src/js/World'))
});

gulp.task('ts-to-js-tracers', function() {
    return gulp.src('./src/ts/Tracers/*.ts')
                      .pipe(ts(tsProject))
                      .pipe(gulp.dest('./src/js/Tracers'));
});

gulp.task('ts-to-js-baseGeometricObjects', function() {
    return gulp.src('./src/ts/GeometricObjects/BaseObjects/*.ts')
                               .pipe(ts(tsProject))
                               .pipe(gulp.dest('./src/js/GeometricObjects'));
});

gulp.task('ts-to-js-geometricPrimitives', function() {
    return gulp.src('./src/ts/GeometricObjects/*.ts')
                               .pipe(ts(tsProject))
                               .pipe(gulp.dest('./src/js/GeometricObjects/Primitives'));
});

// The default task (called when you run `gulp` from cli).
gulp.task('default', ['ts-to-js-utilities', 
                      'ts-to-js-world', 
                      'ts-to-js-tracers',
                      'ts-to-js-baseGeometricObjects',
                      'ts-to-js-geometricPrimitives']);