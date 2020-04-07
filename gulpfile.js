const gulp = require('gulp');
const sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
sass.compiler = require('node-sass');



gulp.task('message',async function(){
    return console.log('gulp is running');
});

gulp.task('coppyHtml',async function(){
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
    return gulp.src('src/sass/**/*.scss')
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

 gulp.task('images', function(){
    return gulp.src('src/img/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
  });
  
  //script paths
var jsFiles = 'src/scripts/*.js',
jsDest = 'dist/scripts';

gulp.task('scripts', function() {
return gulp.src(jsFiles)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest));
});

 gulp.task('watch', function(){
    gulp.watch('src/sass/**/*.scss', gulp.series(['sass','styles']));
})

gulp.task('build', gulp.series('images', 'styles','sass','scripts'));
