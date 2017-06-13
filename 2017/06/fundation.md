
## 开始学习 foundation - 2017.6.8

> http://foundation.zurb.com

1. 搭建工程

```
npm install -g foundation-cli
foundation new
? name
? type
```


2. 打开 flex 布局

```
## 工程中 scss/_settings.scss 中
$global-flexbox: true;
## scss/app.scss
# 注释
// @include foundation-grid;
// @include foundation-float-classes;
# 打开
@include foundation-flex-grid;
@include foundation-flex-classes;
```