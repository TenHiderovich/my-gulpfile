'use strict';

module.exports = function() {
    $.gulp.task('coffee', function () {
       return $.gulp.src('./app/js/*.js')
            .pipe($.gp.coffee())
            .pipe($.gulp.dest('./app/js'))
    });
};