# vitrual machine noder log

## 2016.10.15

- install nvm 
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
# active nvm 
source ~/.nvm/nvm.sh
```

- setting locale
```
vim /etc/default/locale', LC_ALL="en_US.UTF-8"
```

- modify hostname
```
vim /etc/hostname > vagrant
```

- install latest node.js
```
nvm install node
# switch node version
nvm use node
# install cnpm
npm install -g cmpm
# install es-checker
cnpm install -g es-checker
```

## 2016.10.16
```
# import the public key used by the package management system
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
# Create a /etc/apt/sources.list.d/mongodb-enterprise.list file for MongoDB
echo "deb http://repo.mongodb.com/apt/ubuntu trusty/mongodb-enterprise/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-enterprise.list
# Reroad package database
sudo apt-get update
# install the MongoDB Enterprise packages
sudo apt-get install -y mongodb-enterprise
# pin version
echo "mongodb-enterprise hold" | sudo dpkg --set-selections
echo "mongodb-enterprise-server hold" | sudo dpkg --set-selections
echo "mongodb-enterprise-shell hold" | sudo dpkg --set-selections
echo "mongodb-enterprise-mongos hold" | sudo dpkg --set-selections
echo "mongodb-enterprise-tools hold" | sudo dpkg --set-selections
```


## 11.16 system rollback init

```
## system init
ubuntu 14 ltf

## install git 
sudo apt-get install git
git confit --global user.name Carson
git config --global user.email chenkansheng0@163.com
git config --global color.ui auto
```

- rollback to **10.15**
