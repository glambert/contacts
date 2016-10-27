// Split and load multiple tasks, inspired by
// http://macr.ae/article/splitting-gulpfile-multiple-files.html
var gulp = require('gulp');
var del = require('del');
var devIp = require('dev-ip')();
var argv = require('yargs').argv;

// Load tasks config
var config = require('./tasks/config.json');

// Set shared tasks object
var shared = {
  basePath: './',
  bsIp: devIp[0],
  isHttps: argv.https || false,
  env: argv.env || null,
};

// Helper function to get task
function getTask(task) {
  return require('./tasks/' + task)(shared);
}

// Init tasks, make sure deps are defined (array as second argument)
// See http://schickling.me/synchronous-tasks-gulp/
// And https://github.com/OverZealous/run-sequence/issues/21
gulp.task('browsersync', getTask('browsersync'));
gulp.task('sass', getTask('sass'));
gulp.task('webpack-build', getTask('webpack/build'));
gulp.task('minifycss', ['sass'], getTask('minifycss'));
gulp.task('browsersync-external', ['webpack-build'], getTask('browsersync-external'));

// Lint tasks
gulp.task('stylelint', getTask('stylelint'));

// Build tasks with necessary dependencies
gulp.task('revision', ['minifycss', 'webpack-build'], getTask('revision'));

// Dev task
gulp.task('dev', ['browsersync', 'sass'], () => {
  gulp.watch(config.watch.sass, ['sass']);
});

// Dev external task
gulp.task('dev-external', ['browsersync-external', 'sass'], () => {
  gulp.watch(config.watch.sass, ['sass']);
});

// Build task
gulp.task('build', [
  'minifycss',
  'webpack-build',
  // NOTE: commented since revision requires some extra work I usually do in PHP,
  // and I want to keep this simple for this ;)
  // 'revision'
]);

// Dev build task
gulp.task('dev-build', [
  'sass',
  'webpack-build'
]);
