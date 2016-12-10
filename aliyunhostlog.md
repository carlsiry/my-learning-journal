# 我的阿里云主机日志


## 镜像快照恢复到 ** 微信卡尔森里 ** —— 2016.10.18.am

### 10.18 
```
# setting ssh key
ssh-keygen -t rsa -C chenkansheng0@163.com
# copy contents add to github
cat ~/.ssh/id_rsa.pub
# authenticated
ssh -T git@github.com

# config shell
git clone git@github.com:littlecarson/mydotfiles.git
cd mydotfiles
git submodule update --init
bash bootstrap.sh
```

### 12.10 回滚到 10.18
