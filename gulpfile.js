// gulpfile.js

var gulp = require('gulp');
var ts = require('gulp-typescript'); // (https://github.com/ivogabe/gulp-typescript)

var tsProject = { declarationFiles: true,
                  noExternalResolve: false,
                  removeComments: false }

gulp.task('ts-to-js-utilities', function() {
    return gulp.src('./src/ts/Utilities/*.ts')
               .pipe(ts(tsProject))
               .pipe(gulp.dest('./src/js/Utilities/'));
});

gulp.task('ts-to-js-world', function() {
    return gulp.src('./src/ts/World/*.ts')
               .pipe(ts(tsProject))
               .pipe(gulp.dest('./src/js/World/'))
});

gulp.task('ts-to-js-tracers', function() {
    return gulp.src('./src/ts/Tracers/*.ts')
                      .pipe(ts(tsProject))
                      .pipe(gulp.dest('./src/js/Tracers/'));
});

gulp.task('ts-to-js-geometricObjects', function() {
    return gulp.src('./src/ts/GeometricObjects/*.ts')
                               .pipe(ts(tsProject))
                               .pipe(gulp.dest('./src/js/GeometricObjects/'));
});

gulp.task('ts-to-js-primitives', function() {
    return gulp.src('./src/ts/GeometricObjects/Primitives/*.ts')
        .pipe(ts(tsProject))
        .pipe(gulp.dest('./src/js/GeometricObjects/Primitives/'));
});

gulp.task('ts-to-js-lights', function() {
    return gulp.src('./src/ts/Lights/*.ts')
                               .pipe(ts(tsProject))
                               .pipe(gulp.dest('./src/js/Lights/'));
});

gulp.task('ts-to-js-samplers', function() {
    return gulp.src('./src/ts/Samplers/*.ts')
                               .pipe(ts(tsProject))
                               .pipe(gulp.dest('./src/js/Samplers/'));
});

gulp.task('ts-to-js-brdfs', function() {
    return gulp.src('./src/ts/BRDFs/*.ts')
                               .pipe(ts(tsProject))
                               .pipe(gulp.dest('./src/js/BRDFs/'));
});

gulp.task('ts-to-js-materials', function() {
    return gulp.src('./src/ts/Materials/*.ts')
                               .pipe(ts(tsProject))
                               .pipe(gulp.dest('./src/js/Materials/'));
});

// The default task (called when you run `gulp` from cli).
gulp.task('default', ['ts-to-js-utilities',
                      'ts-to-js-world',
                      'ts-to-js-tracers',
                      'ts-to-js-geometricObjects',
                      'ts-to-js-primitives',
                      'ts-to-js-samplers',
                      'ts-to-js-brdfs',
                      'ts-to-js-materials',
                      'ts-to-js-lights']);
