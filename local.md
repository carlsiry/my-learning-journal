# local learning journal

## 搬入`Github`

- 初始化本地设置
```
# git config
git config --global user.name Carson
git config --global user.email chenkansheng0@163.com
git config --global color.ui auto

# config SSH key
ssh-keygen -t rsa -C chenkansheng0@163.com
cat ~/.ssh/id_rsa.pub   # copy to github > settings > ssh and GPA keys

# add remote repositroy
```

- 创建记录本地系统的日志仓库
```
# create local repositroy
cd ~/desktop/
mkdir mylog && cd mylog
git init

# add remote repositroy
git remote add origin git@github.com:littlecarson/mylog

# add and push
vim local.md
git add local.md
git commit -m "first commit"
git push -u origin master

# view git logs, status, modify
git log
git log --pretty=short    # 只显示一行提交信息
git log README.md   # 查看指定文件或目录的日志
git log -p    # 文件的前后差异会显示在提交信息之后
git log -p README.md    # 查看指定文件或目录的前后差异
git diff    # 查看工作树和暂存区的区别
git diff HEAD    # 查看工作树和最新提交的差别

# branch
git branch  # 查看分支列表
git checkout branch-B   # create branch
git branch branch-B     # switch branch
git checkout -b branch-B    # create and switch branch

# git merge
git checkout master
git merge --no-ff branch-B
git log --graph 

# git reverse




```
