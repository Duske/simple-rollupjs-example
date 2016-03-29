import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import rollup from 'gulp-rollup';
import rollupIncludePaths from 'rollup-plugin-includepaths';
import babel from 'gulp-babel';
import rename from 'gulp-rename';
import util from 'gulp-util';
import header from 'gulp-header';

const headerBanner = `
/**
  ###########################
  This is super cool JS code!
  ###########################
**/
`;
const includePathOptions = {
    paths: ['src/']
};

gulp.task('default', () => {
  return gulp.src('src/index.js')
    .pipe(rollup({
      sourceMap: true,
      format: 'iife',
      plugins: [
        rollupIncludePaths(includePathOptions)
      ]
    }))
    .pipe(babel())
    .on('error', util.log)
    .pipe(header(headerBanner))
    .pipe(rename('bundle.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'));
});
