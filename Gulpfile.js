var gulp   = require('gulp'),
	rollup = require('gulp-rollup'),
	babel  = require("gulp-babel"),
	rename = require('gulp-rename'),
	sass   = require('gulp-sass')

gulp.task('build', function() {
	// build JS
	gulp.watch('tmp/**.js').on('change', function() {
		gulp.src('tmp/app.js')
			.pipe(rollup({
				format: 'iife'
			}))
			.pipe(babel())
			.pipe(rename('app.js'))
			.pipe(gulp.dest('app/js/'))

		gulp.src('tmp/transactions.js')
			.pipe(rollup({
				format: 'iife'
			}))
			.pipe(babel())
			.pipe(rename('transactions.js'))
			.pipe(gulp.dest('app/js/'))
	})

	// build SASS
	gulp.src('src/scss/screen.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./app/css'));
	gulp.watch('src/**/*.scss').on('change', function() {
		gulp.src('src/scss/screen.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest('./app/css'));
	})

	// Copy images
	gulp.src('src/img/**')
		.pipe(gulp.dest('app/img/'))
	gulp.watch('src/img/**').on('change', function() {
		gulp.src('src/img/**')
			.pipe(gulp.dest('app/img/'))
	})

	// Copy window htmls
	gulp.src('src/*.html')
		.pipe(gulp.dest('app/'))
	gulp.watch('src/*.html').on('change', function() {
		gulp.src('src/*.html')
			.pipe(gulp.dest('app/'))
	})

	// Copy main.js
	gulp.src('src/main.js')
		.pipe(gulp.dest('app/'))
	gulp.watch('src/main.js').on('change', function() {
		gulp.src('src/main.js')
			.pipe(gulp.dest('app/'))
	})

	// Copy disctribution package.json
	gulp.src('src/package.json')
		.pipe(gulp.dest('app/'))
	gulp.watch('src/package.json').on('change', function() {
		gulp.src('src/package.json')
			.pipe(gulp.dest('app/'))
	})
})


var electron = require('gulp-electron'),
    packageJson = require('./package.json')

gulp.task('electron', function() {

	gulp.src("")
	.pipe(electron({
		asar: true,
		src: './app',
		packageJson: packageJson,
		release: './release',
		cache: './cache',
		version: 'v0.36.2',
		packaging: false,
		platforms: ['darwin-x64'],
		platformResources: {
			darwin: {
				CFBundleDisplayName: packageJson.productName,
				CFBundleIdentifier: packageJson.name,
				CFBundleName: packageJson.productName,
				CFBundleVersion: packageJson.version,
				icon: 'icon.icns'
			}
		}
	}))
	.pipe(gulp.dest(""))
})
