const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
      .pipe(sass())
      .pipe(gulp.dest('./build/styles'));
}



exports.default = gulp;
exports.sass = compilaSass;