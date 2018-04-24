'use strict';

module.exports = function () {
    $.gulp.task('sprite', function () {
        $.gulp.src('./app/img/*.png')
            .pipe($.gp.spritesmash({
            imagePath: 'app/img',
            cssPath: './app/scss/utils/',
            preprocessor: 'scss'
        }))
        .pipe($.gp.spritesmash())
        .pipe($.gulp.dest('./app/img/'));
    });
};