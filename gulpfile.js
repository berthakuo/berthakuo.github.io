var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "."
    }
  });
});

gulp.task('sass', function(){
  return gulp.src('main.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('.'));
    //.pipe(reload({stream:true})); // prompts a reload after compilation
});


// gulp.task('watch', gulp.series('sass', 'browser-sync'), function() {
//     gulp.watch('main.scss', ['sass']);
//     gulp.watch('*.html').on('change', browserSync.reload);
// });


// gulp.task('watch', function(){
//   gulp.watch('*.html', browserSync.reload); 
// });

gulp.task('reload', function(){
  browserSync.reload;
});

gulp.task('watch', function(){
  gulp.watch('main.scss', gulp.series('sass')); 
});
