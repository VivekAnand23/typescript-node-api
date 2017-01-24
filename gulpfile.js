const gulp = require('gulp');
const ts = require('gulp-typescript');
const nodemon = require("gulp-nodemon");

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('default', ["watch", "nodemon"]);

gulp.task('compile', () => {
    const tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['compile'], () => {
    gulp.watch('src/**/*.ts', ['compile']);
});

gulp.task("nodemon", function () {
  nodemon({ script: "dist/index.js" });
});
