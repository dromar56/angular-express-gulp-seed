var gulp	= require("gulp");
var browserify	= require("gulp-browserify");
var path	= require("path");
var rename	= require("gulp-rename");
var watch	= require("gulp-watch");
var notify	= require("gulp-notify");

var file_to_browserify = 'views/js/app.js';
var files_to_watch_for_browserify = "views/js/**/*.js";
var browseried_file_dest = "public/dist";

function handleErrors() {
    // Send error to notification center with gulp-notify
    notify.onError({
	title: "Compile Error",
	message: "<%= error.message %>"
    }).apply(this, arguments);

    // Keep gulp from hanging on this task
    this.emit('end');
};

gulp.task('browserify', function() {
    gulp.src(path.resolve(file_to_browserify))
        .pipe(browserify({
	    transform : ['debowerify'],
            insertGlobals : true,
            debug : true
        }))
	.on("error", handleErrors)
	.pipe(notify("Browserify Success"))
        .pipe(gulp.dest(path.resolve(browseried_file_dest)));
});

gulp.task("watch", function(){
    watch({glob: files_to_watch_for_browserify }, function(){
	gulp.start("browserify");
    });

    // watch({glob: files_to_copy}, function(){
    // 	gulp.start("copy");
    // });
});
