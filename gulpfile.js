/*
* @Author: huyusheng
* @Date:   2016-01-27 13:09:34
* @Last Modified by:   huyusheng
* @Last Modified time: 2016-01-27 13:38:47
*/

'use strict';
//实现的任务
//1、LESS编译 压缩 合并
//2、JS合并 压缩 混淆
//3、img复制
//4、hmtl压缩
//我们希望通过gulp来管理我们的项目

//在gulpfile中先载入gulp包，因为这个包提供了一些API
var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
//1、LESS编译压缩---合并没必要，一般预处理css都可以导包
gulp.task('style',function(){
  //这里是在执行style任务时自动执行的函数
  gulp.src(['src/styles/*.less','!src/styles/_*.less'])//拿到目标文件
    .pipe(less())//编译less文件到css文件
    .pipe(cssnano())//执行css压缩
    .pipe(gulp.dest('dist/styles'))
})

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

//2.js的合并 压缩混淆
gulp.task('script',function(){
  gulp.src('src/scripts/*.js')
      .pipe(concat('all.js'))//合并
      .pipe(uglify)
      .pipe(gulp.dest('dist/scripts'))
      //.pipe()

  })