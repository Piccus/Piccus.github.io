---
layout: post
title: 基于opencv的摄像头控制程序
description: 一个基于opencv和vs2012的摄像头控制程序。可以实时获取摄像头数据并显示，通过配置文件设置是否保存视频到本地和设置保存回滚周期。
category: blog
---

其实刚开始做这个项目的时候，我是拒绝的，毕竟我才看了加起来不到3小时的c++，领导就甩我个摄像头，连文档和型号都没给我，让我写个程序捕获摄像头的数据实时显示在拓展屏上，还附带视频存储和回滚功能(￣△￣；)。毕竟是搬砖的，哪有困难就得上〒▽〒。

[opencv][]就是我最后找到的解决方法，适合我这种c++不熟，对[directshow][]也敬而远之的小白。[opencv][]是一个c++的开源框架，主要擅长于图像处理，可以对本地视频、图像文件进行读写，也能对摄像头的图像进行获取。当然，想保存摄像头视频也很简单，把图像帧以24帧/秒的速度保存就行了。

## opencv的安装和配置
这里我选择的环境是x86的vs2012，先到[opencv][]官网进行下载解压，然后将~\build\x86\vc11\bin加入环境变量path。接下来就进行vs2012项目设置了。新建一个解决方案和项目后，点击属性管理器，选择debug|win32下的Microsoft.Cpp.Win32.user即可进行全局设置。参见下图。
![vsUserSetting](/images/camera-control/vsUserSetting.jpg)

先选择VC++目录，在可执行文件目录加入~\build\x86\vc11\bin，可包含目录加入：

	~\build\include
	~\build\include\opencv
	~\build\include\opencv2

库目录加入~\build\x86\vc11\lib。再选择链接器下的输入，在附加依赖项里加入：

	opencv_calib3d248d.lib
	opencv_contrib248d.lib
	opencv_core248d.lib
	opencv_features2d248d.lib
	opencv_flann248d.lib
	opencv_gpu248d.lib
	opencv_highgui248d.lib
	opencv_imgproc248d.lib
	opencv_legacy248d.lib
	opencv_ml248d.lib
	opencv_nonfree248d.lib
	opencv_objdetect248d.lib
	opencv_photo248d.lib
	opencv_stitching248d.lib
	opencv_ts248d.lib
	opencv_video248d.lib
	opencv_videostab248d.lib

由于版本不同后面的数字也会不同，release版也是相同配置方法，只是附加依赖项改为：
	
	opencv_calib3d248.lib
	opencv_contrib248.lib
	opencv_core248.lib
	opencv_features2d248.lib
	opencv_flann248.lib
	opencv_gpu248.lib
	opencv_highgui248.lib
	opencv_imgproc248.lib
	opencv_legacy248.lib
	opencv_ml248.lib
	opencv_nonfree248.lib
	opencv_objdetect248.lib
	opencv_photo248.lib
	opencv_stitching248.lib
	opencv_ts248.lib
	opencv_video248.lib
	opencv_videostab248.lib

这时候就已经配置成功了。

## opencv的调用


[opencv]: http://opencv.org/ "opencv"
[directshow]: https://msdn.microsoft.com/en-us/library/dd375454(VS.85).aspx "directshow"