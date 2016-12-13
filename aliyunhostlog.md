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

自定义镜像 ——微信卡尔僧

### 12.11 系统盘初始化到 ubuntu 14

```
# update pakage source lists
$ apt-get update
```

- **install nginx 10.02**

```
# download nginx_signing key
wget http://nginx.org/keys/nginx_signing.key

# add nginx_singning key to the apt program keyring
sudo apt-get add nginx_signing.key

# view system's code name (ubuntu14.04: trusty)
lsb_release -c

# add nginx source to '/etc/apt/sources.list'
$ echo "deb http://nginx.org/packages/ubuntu/ trusty nginx" >> /etc/apt/sources.list
$ echo "deb-src http://nginx.org/package/ubuntu/ trusty nginx" >> /etc/apt/sources.list

# install nginx
apt-get update
apt-get install nginx

# view nginx status
$ service nginx start
$ service nginx status
```

- **install curl**

```
$ apt-get install curl
$ curl -S '127.0.0.1'
```

- **instal git **

`sudo apt-get install git`

```
# git config
git config --global user.name Carson
git config --global user.email chenkansheng0@163.com
git config --global color.ui auto

# config SSH key
ssh-keygen -t rsa -C chenkansheng0@163.com
cat ~/.ssh/id_rsa.pub   # copy to github > settings > ssh and GPA keys

# authenticated
ssh -T git@github.com

```

- **回滚 2016.10.18**

- **安装 Node 基本环境**

```
# clean
rm -rf $HOME/.nvm
sed -i '/nvm/d' $HOME/.bashrc

# clone nvm
cd ~
git clone https://github.com/creationix/nvm.git .nvm
cd .nvm
git checkout 'v0.32.1'

# activate nvm
echo "export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node" >> $HOME/.bashrc
echo ". $HOME/.nvm/nvm.sh" >>  $HOME/.bashrc
source $HOME/.bashrc

# config node
nvm install node
nvm install v6.9.2
nvm alias default v6.9.2

# speedup node modules with native bindings
npm install -g node-gyp-install --registry=http://registry.npm.taobao.org

# update npm 2 latest
npm set registry=http://registry.npm.taobao.org
node-gyp-install
npm install -g pm2 webpack gulp
```

- express

```
$ npm install -g express-generator
$ express jswechat
$ vim /etc/nginx/conf.d/default.conf
vim:
    server {
        location ~ ^/wechat/.+ {
            proxy_pass http://127.0.0.1:3000;
        }
    }


# pm2 kill daemon
pm2 kill
# pm2 start
pm2 start bin/www --watch
DEBUG=* pm2 start bin/www --watch
```


### 12.12 

- **安装 mongodb 3.2**

```
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927

echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list

apt-get update

apt-get install -y mongodb-org

# 启动MongoDB
service mongod start
# 查看服务状态
service mongod status

# 远程连接配置
vim /etc/mongod.conf
vim: #bind_ip 127.0.0.1 监听所有外网ip
```

- **Python 下使用 PyMongo**

```
pip install pymongo

# 安装GUN C compiler（GCC）（使用MongoDB的C扩展）
apt-get install build-essential python-dev

# 验证安装
python
> import pymongo
```

- **Python 安装 python3-pip**：`apt-get install python3-pip`
