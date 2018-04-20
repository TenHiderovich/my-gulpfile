'use strict';

module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('./app/scss/*.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .pipe($.gp.csso())
            .on('error', $.gp.notify.onError({
                titel: 'Style'
            }))
            .pipe($.gp.autoprefixer({
                browsers: [
                    'last 3 version',
                    '> 1%',
                    'ie 8',
                    'ie 9',
                    'opera 12.1'
                ]
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('./app/css'))
    });
}