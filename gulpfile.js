var gulp = require('gulp'),
    sass = require('gulp-sass');

// TASKS
// Sass
gulp.task('sass', function(){
  gulp.src('./src/scss/**/*.scss')
    .pipe(sass())
  .pipe(gulp.dest('./src/css/'));
})



// Watch
gulp.task('listen', function(){
  gulp.watch('./src/scss/**/*.scss', ['sass'])
})