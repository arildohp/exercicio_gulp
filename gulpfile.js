const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

function comprimeJavascript() {
   return gulp.src('./source/scripts/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({
         outputStyle: 'compressed'
      }))
      .pipe(sourcemaps.write('/maps'))
      .pipe(gulp.dest('./build/styles'));
}



exports.default = gulp;
exports.sass = compilaSass;
exports.watch = function() {
   gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
}
exports.javascript = comprimeJavascript;