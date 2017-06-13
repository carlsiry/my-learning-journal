# 学习 semantic UI

> 基于 node.js - gulp 来自动化编译构建

## 开始使用

### 安装 semantic, 搭建开发环境

创建工程目录，下载 **semantic**, 运行构建脚本。

```
cd Desktop
mkdir learn-semantic
npm init
npm install semantic-ui --save
automatic
yes
semantic

cd semantic
gulp

// realtime refresh
browser-sync start --server --no-notify --files "index.html, semantic/dist/semantic.css"
```

### 默认组件用法
#### button

1. **size**: mini tiny small medium large big massive
2. **state**: loading active disabled
3. **color**: primary secondary positive regative red orange yellow olive green teal blue violet purple pink grey black brown
4. **animate**: [default] vertical fade
5. **type**:
    1. [default]: `.ui.[size].[color].[state].button` —— [color]为背景色
    2. basic: `.ui.basic.[size].[color].[state].button` —— [color]为内容和边框色，无背景色
    3. icon: `.ui.[basic／default].[size].[color].[state].button` —— 需要插入字体图标
    4. animate: `.ui.[basic].[size].[animate].[color].[state].button` —— 需要
    5. （icon label): `.ui.[...].[direction].icon.label`
