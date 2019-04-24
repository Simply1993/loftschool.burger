var syntax = 'scss'; // Syntax: sass or scss;

var gulp         = require('gulp'),
    gutil        = require('gulp-util'),
    sass         = require('gulp-sass'),
    browsersync  = require('browser-sync'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    cleancss     = require('gulp-clean-css'),
    rename       = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    notify       = require("gulp-notify"),
    sourcemaps   = require('gulp-sourcemaps');

gulp.task('browser-sync', function () {
  browsersync({
    server: {
      baseDir: 'app'
    },
    notify: false,
    // open: false,
    // tunnel: true,
    // tunnel: "projectname", //Demonstration page: http://projectname.localtunnel.me
  })
});

gulp.task('styles', function () {
  return gulp.src('app/' + syntax + '/*.' + syntax + '')
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
    // .pipe(rename({ suffix: '.min', prefix : '' }))
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(cleancss({level: {1: {specialComments: 0}}})) // Opt., comment out when debugging
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/css'))
    .pipe(browsersync.reload({stream: true}))
});

gulp.task('js', function () {
  return gulp.src([
    'app/js/module.js', // Always at the end
  ])
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(concat('app.min.js'))
    //.pipe(uglify()) // Mifify js (opt.)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/js'))
    .pipe(browsersync.reload({stream: true}))
});

gulp.task('watch', function () {
  gulp.watch('app/' + syntax + '/**/*.' + syntax + '', gulp.series('styles'));
  gulp.watch(['app/libs/**/*.js', 'app/js/module.js'], gulp.series('js'));
  gulp.watch('app/*.html', browsersync.reload)
});

gulp.task('default', gulp.parallel('watch', 'styles', 'js', 'browser-sync'));
