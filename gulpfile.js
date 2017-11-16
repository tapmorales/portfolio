var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

// TASKS
// Sass
gulp.task('sass', function(){
  gulp.src('./src/scss/**/*.scss')
    .pipe(sass())
  .pipe(gulp.dest('./src/css/'));
})

// html
gulp.task('html', function(){
  gulp.src('./src/**/*.html');
})

// Server
gulp.task('serve', function(){
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  })
  gulp.watch('./src/**/*').on('change', browserSync.reload)
  gulp.watch('./src/scss/**/*.scss', ['sass'])
});
