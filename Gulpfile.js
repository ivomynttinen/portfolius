var gulp   = require('gulp'),
	rollup = require('gulp-rollup'),
	babel  = require("gulp-babel"),
	rename = require('gulp-rename'),
	sass   = require('gulp-sass')

gulp.task('bundle', function() {
	gulp.watch('tmp/**.js').on('change', function() {
		gulp.src('tmp/browserInit.js')
			.pipe(rollup({
				format: 'iife'
			}))
			.pipe(babel())
			.pipe(rename('app.js'))
			.pipe(gulp.dest('app/js/'))
	})

	gulp.src('src/img/**')
		.pipe(gulp.dest('app/img/'))
	gulp.watch('src/img/**').on('change', function() {
		gulp.src('src/img/**')
			.pipe(gulp.dest('app/img/'))
	})


	gulp.src('src/scss/screen.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./app/css'));
	gulp.watch('src/**/*.scss').on('change', function() {
		gulp.src('src/scss/screen.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest('./app/css'));
	})
})
