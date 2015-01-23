// gulpfile.js

var gulp = require('gulp');
var ts = require('gulp-typescript'); // (https://github.com/ivogabe/gulp-typescript)

gulp.task('compile-to-js', function() {
    return gulp.src('./src/**/*.ts')
               .pipe(ts({declarationFiles: true, noExternalResolve: true}))
               .pipe(gulp.dest('./src/Utilities'))
});

// The default task (called when you run `gulp` from cli).
gulp.task('default', ['compile-to-js']);