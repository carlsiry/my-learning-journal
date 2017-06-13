
## 针对各浏览器预设样式不一致的兼容方案

### 面对的问题

1. 盒模型样式不一：如 p、h1、ul 等标签的内外边距和填充不一致
2. 字号不一：各浏览器的预设字号不一样，基准水平也不同，会影响整体的设计
3. 行高不一：为 body 标签设置 `linehight: 1.2`能确保所有浏览器使用相同的行高
4. 单元格边框、间隙、对齐方式、字重不一
5. 图像链接边框：有些浏览器会为链接中的图像设置边框，有些不会
6. 列表缩进、项目符号不一
7. 引用内容中的引号不一：safari和firefox 会自动为引用内容添加引号，还分单和双


### 解决方案

#### 消除干扰方案

```
/* reset browser styles */

/* 1. 重定义盒模型的计算方式为：边框宽度模型
* { box-sizing: border-box; }

／* 2. 清除统一所有块元素的默认盒模型样式
html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp,small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}

／* 3. 增加对 html5 新的结构标签的支持
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}

／* 4. 统一行高 *／
body {
  line-height: 1.2;
}

／* 5. 统一单元格样式：无间隙、边框合一 *／
table {
  border-collapse: collapse;
  border-spacing: 0;
}

／* 6. 统一列表缩进和项目符号
ol {
  padding-left: 1.4em;
  list-style: decimal;
}
ul {
  padding-left: 1.4em;
  list-style: square;
}

／* 7. 清除引用内容的添加引号 *／
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

/* end reset browser styles */
```
