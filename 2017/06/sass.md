## 学习使用 sass

> http://sass-lang.com

> install: gem install compass


### 工程组织结构

1. 代码文件组织：sass文件存放到 scss/sass 文件夹中，编译文件导出的css文件存放到 css 文件夹中。

2. 编译监听产出：工程目录下执行 `sass --watch scss/sass:css`

3. 压缩编译：`sass --watch scss/sass:css --type compressed`

4. 局部文件：以下划线 **_** 开头命名，使用 `@import '_reset.scss'`引用到其他文件中，可以省略文件名中的下划线和扩展名
```
@import 'helps/variables';
@import 'base/resets';
@import 'base/grid';
```

### 语法

1. 变量
```
/* 调色板 *／
$primary-dark: #06888A;
$primary-light: #FFEED5;
$second-dark: #DC664A;
/* 使用 *／
$page-background: $primary-light;
$text-color: $second-dark;
```
2. 嵌套选择符、引用父辈选择符
```
／* 嵌套 *／
.nav {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  li {
    width:30%;
  }
  ／* 引用父辈 *／
  &:hover {
    color: indigo;
  }
}

.main {
  &-title {
  }
  &-content {
  }
}
/* 编译为 *／
.main-title {}
.main-content {}
```

3. 扩展属性 与 占位选择符
```
h1 { color: #222; }
h2 { @extend h1; padding: 10px;}
/* 编译为 *／
h1, h2 { color: #222;}
h2 { padding: 10px; }

/*  解决扩展所有属性问题 *／
%btn { display: inline-block; padding: 1em;}
.btn-order { @extend %btn; color: white; }
.btn-delete { @extend %btn; color: red; }
/* 编译为 */
.btn, btn-order, btn-delete { ... }
.btn-order { color: white; }
```

4. mixin 用法
```
/* 定义 *／
@mixin flex { display: -webkit-flex; display: flex; }
@mixin roate($deg) {
  -webkit-transform: rotate($deg);
  -ms-transform: rotate($deg);
  transform: rotae($deg);
}
/* 使用 *／
.container {
  @include flex;
}
div { @include rotate(45deg);}
h2 { @inlclude rotate(15deg);}

/* 文本插值 *／
@mixin rotate($deg) { -webkit-transform: rotate(#{$deg}deg); }

/* 多个参数，不是必需设为null, 指定写明参数*/
@mixin text($size, $weight:normal, $color:null) {...}
h1 { @include text(2em,$color:red);}
```
可引用第三方sass库快速编码：Bourbon, Neat, Susy, Breakpoint, Compass
interpolation

5. 处理媒体查询
```
/* 嵌套写法 */
h1 {
  font-size: 2em;
  @media (min-width: 1200px) {
  font-size: 3em;
  }
}

/**** Mixin creater：推荐写法 ****／
/* 1. 设置断点变量 */
$screen-small: 550px;
$screen-medium: 760px;
$screen-larger: 1024px;
/* 2. 创建媒体查询 mixin */
@mixin m-small {
  @media (min-width: $screen-small) and (max-width: $screen-medium - 1px) {
    @content;
  }
}
@mixin m-medium {
  @media (min-width: $screen-mediu) and (max-width: $screen-larger - 1px) {
    @content;
  }
}
@mixin m-larger {
  @media (min-width: $screen-larger) {
    @content;
  }
}
/* 3. 使用媒体查询 mixin
.sidebar {
  padding: 0px;
  margin: 0px;
  @include m-small {
    padding: 10px;
  }
  @include m-medium {
    margin: 20px 0;
  }
  @include m-larger {
    padding: 30px;
  }
}
```
