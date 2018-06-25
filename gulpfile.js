// 'use strict';

var gulp = require("gulp");
var fileinclude = require("gulp-file-include");
var less = require("gulp-less");
var auto = require("gulp-autoprefixer");

gulp.task("fileinclude", function () {
  // 将你的默认的任务代码放在这
  gulp
    .src("./html/cgjl_gmxz.html")
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file"
      })
    )
    .pipe(gulp.dest(""));
});

gulp.task("less", function () {
  gulp
    .src("./assets/less/*.less")
    .pipe(less())
    .pipe(gulp.dest("./assets/css"));
});

gulp.task("auto", function () {
  gulp.watch("./assets/less/*.less", ["less"]);
});

gulp.task("default", ["less", "auto"]);