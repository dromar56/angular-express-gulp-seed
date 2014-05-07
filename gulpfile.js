var gulp	= require("gulp");
var gutil	= require("gulp-util");
var browserify	= require("gulp-browserify");
var path	= require("path");
var rename	= require("gulp-rename");
var watch	= require("gulp-watch");
var notify	= require("gulp-notify");
var nodemon     = require("gulp-nodemon");
var sass	= require("gulp-ruby-sass");
var concat      = require("gulp-concat");
var livereload	= require("gulp-livereload");


function handleErrors() {
    notify.onError({
	title: "Compile Error",
	message: "<%= error.message %>"
    }).apply(this, arguments);
};

gulp.task('browserify', function() {
    gulp.src(path.resolve('public/js/app.js'))
        .pipe(browserify({
	    transform : ['debowerify'],
            insertGlobals : true,
            debug : true
        }))
	.on("error", handleErrors).on("error", gutil.log)
        .pipe(gulp.dest('public/dist'));
});

gulp.task('css', function () {
    return gulp.src("public/css/**/*.scss")
        .pipe(sass({sourcemap: false}))
	.on("error", handleErrors).on("error", gutil.log)
        .pipe(gulp.dest("public/dist"));
});

gulp.task("watch", function(){
    var server = livereload();

    watch({glob: "public/js/**/*.js" }, function(files){
	gulp.start("browserify");
    });

    watch({glob: "public/css/**/*.scss" }, function(files){
	gulp.start("css");
    });

    gulp.watch(['public/dist/**', 'views/**']).on('change', function(file) {
	server.changed(file.path);
    });

});

gulp.task("nodemon", function(){
    nodemon({ script: "index.js", ext: 'js', ignore: ['bower_components/**/*.js', 'public/**/*.js', 'gulpfile.js'] })
	.on('restart', function () {
	    console.log('restarted!');
	});
});

gulp.task("build", ['css', 'browserify']);
gulp.task("dev", ["nodemon", "watch"]);
