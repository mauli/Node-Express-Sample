const gulp = require('gulp');
const yargs = require('yargs').argv;
const config = require('./gulp/gulp.config')();

// const jshint = require('gulp-jshint');
// const jscs = require('gulp-jscs');
// const print = require('gulp-print').default;
// const gulpif = require('gulp-if');

//lazy loading all the above gulp plugins using a single plugin below
const $ = require('gulp-load-plugins')({lazy: true});


gulp.task('verify', function(){
  return gulp.src(config.alljs)
  .pipe($.if(yargs.verbose, $.print.default())) //gulp verify --verbose to view the file list
  .pipe($.jscs())
  .pipe($.jshint())
  .pipe($.jshint.reporter('jshint-stylish'))
  .pipe($.jshint.reporter('fail')); //in CI(jenkins if you want to show error to the user)
});