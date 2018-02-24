const gulp = require('gulp');
const esLint = require('gulp-eslint')

gulp.task('lint', () => {
    gulp.src('src/**/*.js')
    .pipe(esLint())
});