var rootpath			= 'htdocs/';
var cmnpath				= rootpath + 'common/';

var gulp 					= require('gulp');
var browserSync		= require('browser-sync');
var postcss				= require('gulp-postcss');

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: rootpath
		}
	});
});


gulp.task("browser-reload", function() {
  browserSync.reload();
});

var browsers = [
    'last 2 version',
    'ie 6',
    'firefox 2',
    'iOS >= 8.1',
    'Android >= 4.4'
];

gulp.task('postcss', function(){
	gulp.src(cmnpath + 'postcss/*.css')
	.pipe(postcss([
		require('postcss-import'),
		require('postcss-calc'),
		require('postcss-selector-matches'),
		require('postcss-custom-properties'),
		require('postcss-nesting'),
		require('autoprefixer')({browsers: browsers}),
		require('postcss-custom-media'),
		require('css-mqpacker'),
    require('csswring')
	]))
	.pipe(gulp.dest(cmnpath + 'css'))
	.pipe(browserSync.stream());
});


gulp.task('watch', function(){
	gulp.watch(cmnpath + 'postcss/**/*.css',['postcss']);
	gulp.watch(
		[
			rootpath	+	'**/*.html',
			rootpath	+	'**/*.php',
			cmnpath		+ 'js/*.js'
		],
		['browser-reload']);
});


gulp.task('default', ['browser-sync','watch']);
