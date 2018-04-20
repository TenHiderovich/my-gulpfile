'use strict';

module.exports = function () {
    $.gulp.task('sprite', function () {
        $.gulp.src('./app/img/*.png')
        .pipe($.gp.sprite('sprite-' + Math.random().toString().replace(/[^0-9]/g, '') + '.png', {
            imagePath: 'app/img',
            cssPath: './app/scss/utils/',
            preprocessor: 'scss'
        }))
        .pipe($.gulp.dest('./app/img/'));
    });
};