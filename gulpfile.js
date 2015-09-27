'use strict';

var 	gulp	 		= require('gulp'), // Name variable after the module
		concat		= require('gulp-concat'),
		uglify 		= require('gulp-uglify'),
		rename		= require('gulp-rename'),
		sass 			= require('gulp-sass'),
		maps			= require('gulp-sourcemaps'),
		del 			= require('del'),
		compass	= require('gulp-compass');
	
/*gulp.task("concatScripts", function() {
		return gulp.src([
			'js/*.js',]) // List of files in array
		.pipe(maps.init())
		.pipe(concat("app.js"))  // File to concat to
		.pipe(maps.write('./'))
		.pipe(gulp.dest("js")) //Destination of file
	});*/

gulp.task("minifyScripts", function() {
	return gulp.src("js/app.js")
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('js'))
});

gulp.task("compileSass", function() {
	return gulp.src("scss/style.scss")    // This is a file that has the links to all other scss inside, a compiled import file
		.pipe(maps.init())
		.pipe(sass())
		.pipe(maps.write('./'))             // Current working directory relative to .dest()
		.pipe(gulp.dest('css'));
});

gulp.task('compass', function() {
  gulp.src('./src/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'css',
      sass: 'scss'
    }))
    .pipe(gulp.dest('app/assets/temp'));
});

//gulp.task('clean', function() {
//	del(['dist', 'css/application.css*', 'js/app*.js*']); // Deletes the dist folder and those files
//});

gulp.task("build", ['minifyScripts','compileSass']), function() {
	return gulp.src(["css/application.css", "js/app.min.js", "index.html", "img/**", "fonts/**"], { base: './'})
		.pipe(gulp.dest('dist'));
}; // Removed concatScripts because it is a dependency of minifyScripts and is ran there.
	
//gulp.task("default", ["clean"], function() {
//	gulp.start('build');
//}); //Default