

## Mac OS 环境搭建

1. python3.6: https://www.python.org/
2. mysql5.6(集成工具MAMP): https://www.mamp.info

  -命令行找不到路径问题：添加环境变量到 ~/.zshrc
    export PATH=$PATH:/Applications/MAMP/Library/bin
  - MAMP环境下安装MySQLdb，找不到头文件问题
    brew install mysql-connector-c
    pip install mysql-python
  - 查看登陆状态：命令行登陆后输入 \s

3. virtualenv: pip3 install -i http://pypi.douban.com/simple --trusted-host pypi.douban.com virtualenv
4. pycharm


## virtaulen 虚拟化环境的使用

1. create : virtaulenv venvName
2. active : source venv/bin/activate
3. exit : deactivate


## 虚拟化环境下安装 Flask
```
virtualenv flask-venv
source flask-venv/bin/activate
pip3 freeze # 安装前检测
pip3 install -i http://pypi.douban.com/simple --trusted-host pypi.douban.com flask
pip3 freeze # 安装后检测
click==6.7
Flask==0.12.2
itsdangerous==0.24
Jinja2==2.9.6
MarkupSafe==1.0
Werkzeug==0.12.2
```

## 微电影项目工程结构
```
- manage.py         入口脚本文件
- app               项目app 模块
  - home / admin      前／后台管理模块
    - __init__.py          模块初始化
    - views.py             视图处理文件
    - forms.py             表单处理文件
  - static            静态资源文件夹
  - template          模板文件夹
  - models.py         数据模型文件
  - __init__.py       模块初始化文件

## 蓝图规划与使用

Flask 用 **蓝图** 的概念来描述如何模块化、组件化一个应用，以便更好地构建和扩展到一个甚至多个应用中。

使用蓝图的优点：
  1. 应用的分解 —— 模块化开发、视图组件化（路由模块化前缀、后缀）、优化项目结构、增强可读性，易于维护
缺点：不能在应用创建后撤销注册一个蓝图，除非摧毁整个应用对象

- 定义蓝图
- 注册蓝图
