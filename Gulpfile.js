var gulp   = require('gulp'),
	rollup = require('gulp-rollup'),
	babel  = require("gulp-babel"),
	rename = require('gulp-rename')

gulp.task('bundle', function(cb) {
	gulp.watch('tmp/**.js').on('change', function() {
		gulp.src('tmp/browserInit.js')
			.pipe(rollup({
				format: 'iife'
			}))
			.pipe(babel())
			.pipe(rename('app.js'))
			.pipe(gulp.dest('app/js/'))
	})
})


gulp.task("test", function() {
	gulp.src('tmp/browserInit.js')
		.pipe(rollup({
			format: 'iife'
		}))
		.pipe(babel())
		.pipe(rename('app.js'))
		.pipe(gulp.dest('app/js/'))
})
