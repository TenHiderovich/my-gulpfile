'use strict';

module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./app/scss/*.scss', $.gulp.series('sass'));
        $.gulp.watch('./app/js/*.js', $.gulp.series('ugli-con-ren'));
        $.gulp.watch('./app/*.php', $.gulp.series('connect'));
    });
};