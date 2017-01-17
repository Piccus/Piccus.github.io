---
layout: post
title: centos7-minimal python3环境配置
description: 在centos7-minimal下的python3环境配置、python3安装
category: blog
---

每次新建一个虚拟机的时候，基本上所有新手（包括我）都会重复搜索相同的东西，xxx的环境配置之类的啊。为了方便其他人（其实主要是为了方便自己），在此把各个地方收集到的python3配置过程记录下来，顺便整合一下。

## python3安装准备
首先你需要准备python3的安装包和编译环境，由于我是centos7 minimal，所以连wget命令都没有。
总的来说，你需要安装一下环境：

	yum -y install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gcc make

然后使用wget从官网下载python安装包就行。

	wget http://mirrors.sohu.com/python/3.6.0/Python-3.6.0.tar.xz


## python3解压并安装
先新建一个文件夹用来放python。
	
	mkdir /usr/local/python3

然后解压安装就行了

	xz -d Python-3.6.0.tar.xz
	tar -xf Python-3.6.0.tar
	cd Python-3.6.0
	./configure --prefix=/usr/local/python3
	make all
	make install
	make clean
	make disclean

进入安装的绝对路径，检查是否安装成功

	/usr/local/python3/bin/python3 -V Python 3

## python3环境变量修改
在/usr/bin中有python、python2、python2.7三个文件依次指向后者，我们将python备份(`sudo mv python python.bak`)，然后创建python3的软链接(`sudo ln -s /usr/local/python3/bin/python3 /usr/bin/python`)。这样默认的python版本就替换为python3了。

因为yum使用python2，因此替换为python3后可能无法正常工作，因此修改yum配置文件(`sudo vi /usr/bin/yum`)。 
将第一行指定的python版本改为python2.7(#!/usr/bin/python 改为 #!/usr/bin/python2.7)

CentOS 6只要修改/usr/bin/yum
CentOS 7需要同时修改/usr/bin/yum以及/usr/libexec/urlgrabber-ext-down同样的Python版本
