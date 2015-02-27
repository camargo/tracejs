// gulpfile.js

var gulp = require('gulp');
var ts = require('gulp-typescript'); // https://github.com/ivogabe/gulp-typescript
var concat = require('gulp-concat'); // https://github.com/wearefractal/gulp-concat
var uglify = require('gulp-uglify'); // https://www.npmjs.com/package/gulp-uglify

var tsProject = { declarationFiles: true,
    noExternalResolve: false,
    removeComments: false }

gulp.task('ts-to-js-utilities', function() {
    return gulp.src('./src/ts/Utilities/*.ts')
        .pipe(ts(tsProject))
        .pipe(gulp.dest('./src/js/Utilities/'));
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

gulp.task('ts-to-js-world', function() {
    return gulp.src('./src/ts/World/*.ts')
        .pipe(ts(tsProject))
        .pipe(gulp.dest('./src/js/World/'))
});

gulp.task('ts-to-js-cameras', function() {
    return gulp.src('./src/ts/Cameras/*.ts')
        .pipe(ts(tsProject))
        .pipe(gulp.dest('./src/js/Cameras/'));
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

var fileList = ['./src/js/Utilities/*.js',
    './src/js/Tracers/Tracer.js',
    './src/js/Tracers/*.js',
    './src/js/GeometricObjects/*.js',
    './src/js/GeometricObjects/Primitives/*.js',
    './src/js/Samplers/Sampler.js',
    './src/js/Samplers/*.js',
    './src/js/Cameras/Camera.js',
    './src/js/Cameras/*.js',
    './src/js/Lights/Light.js',
    './src/js/Lights/*.js',
    './src/js/BRDFs/BRDF.js',
    './src/js/BRDFs/*.js',
    './src/js/Materials/Material.js',
    './src/js/Materials/*.js',
    './src/js/World/ViewPlane.js',
    './src/js/World/World.js'
]

gulp.task('concat', function() {
    return gulp.src(fileList)
        .pipe(concat('trace.debug.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('concat-and-min', function() {
    return gulp.src(fileList)
        .pipe(concat('trace.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

function tasks(release) {
    return ['ts-to-js-utilities',
        'ts-to-js-world',
        'ts-to-js-tracers',
        'ts-to-js-geometricObjects',
        'ts-to-js-primitives',
        'ts-to-js-samplers',
        'ts-to-js-cameras',
        'ts-to-js-brdfs',
        'ts-to-js-materials',
        'ts-to-js-lights',
        release]
}

// The default task (called when you run `gulp` from cli).
// Develop task (`gulp develop` from cli)
gulp.task('default', tasks('dist-release'));
gulp.task('develop', tasks('dist-debug'));

// Dist debug task (called when you run 'gulp dist-debug' from cli).
gulp.task('dist-debug', ['concat']);

// Dist release task (called when you run 'gulp dist-debug' from cli).
gulp.task('dist-release', ['concat-and-min']);