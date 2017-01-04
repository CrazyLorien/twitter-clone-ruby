import gulp from 'gulp';
import gutil from 'gulp-util';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
var glob = require('glob');
gulp.task('build', () => {
    var files =  glob.sync('./app/assets/frontend/*.jsx')
    return browserify({
            entries: files,
            extensions: ['.jsx'],
            debug: true
        })
        .transform('babelify', {
            presets: ['es2015', 'react'],
            plugins: ['transform-class-properties']
        })
        .bundle()
        .on('error', function(err){
            gutil.log(gutil.colors.red.bold('[browserify error]'));
            gutil.log(err.message);
            this.emit('end');
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('app/assets/javascripts'));
});
 
gulp.task('watch', ['build'], () => {
    gulp.watch('./source/**/*.jsx', ['build']);
});
 
gulp.task('default', ['watch']);