const gulp = require('gulp');




gulp.task('message', async function(){
    return console.log('gulp is running...');
});

gulp.task('coppyHtml', async function(){
    gulp.src('src/*.html')
    .pipe(gulp.dest('dest'));
});

