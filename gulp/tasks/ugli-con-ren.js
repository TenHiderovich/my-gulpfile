'use strict';

module.exports = function () {
    $.gulp.task('ugli-con-ren', function () {
        return $.gulp.src('./app/js/*.js')
            .pipe($.gp.concat('./app.js'))
            .pipe($.gp.uglify())
            .pipe($.gp.rename({
                suffix: '.min'
            }))
            .pipe($.gulp.dest('./app/js'))
    });
};