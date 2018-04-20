'use strict';

module.exports = function () {
    $.gulp.task('connect', function () {
        return $.gulp.src('./app/*.php')
            $.gp.connect.server({
                base: './',
                keepalive: true,
                hostname: 'localhost',
                port: 3000,
                open: true
            })
                .pipe($.gp.browserSync());
    })
};