const gulp = require('gulp');
const sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');

sass.compiler = require('node-sass');



gulp.task('message',async function(){
    return console.log('gulp is running');
});

gulp.task('coppyHtml',async function(){
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
    return gulp.src('src/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('src/css'));
  });

  gulp.task('styles',async function() {
    gulp.src(['src/css/*.css'])
    .pipe(concat('css.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/styles/'));
 });

 gulp.task('watch', function(){
    gulp.watch('src/sass/*.scss', gulp.series(['sass','styles']));
})

gulp.task('build', gulp.series('watch', 'styles','sass'));
