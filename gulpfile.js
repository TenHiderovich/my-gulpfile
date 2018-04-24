'use strict';

global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create()
}

$.path.task.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel(
        'sass',
        'connect',
        'ugli-con-ren'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));