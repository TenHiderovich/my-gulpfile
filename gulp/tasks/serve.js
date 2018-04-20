'use strict';

module.exports = function () {
    $.gulp.task('serve', function () {
        $.browserSync.init({
            // tunnel: true,
            // tunnel: 'calc' //http://calc.localtunnel.me
            open: true,
            server: './app'
        });
        $.browserSync.watch('app', $.browserSync.reload);
    });
};