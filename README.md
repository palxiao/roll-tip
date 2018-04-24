# 网页随机动态提示消息弹出插件

#### 项目介绍
a simple random dynamic prompt tip/message.

#### 软件架构
JavaScript Html Css3

#### 安装教程

`<link rel="stylesheet" type="text/css" href="../roll-tip.css" />`

`<script src="../roll-tip.min.js"></script>`

#### 使用说明
HTML：

	<!-- 自定义动态内容 -->
	  <span id="roll-tip">
	    <span id="roll-main"></span> //标签1
	    <span id="roll-time"></span> //标签2
	    <span id="roll-type"></span> //标签3
	  </span>
	 
JS：

	<script>
	  var rollTip = new rollTip({
	    el: document.getElementById('roll-tip'),
	    custom: ['', 20, ['1','2']], // 对应上面自定义的标签，详细参照下方【说明】
	    headImg: 'temp.jpg',
	    maxSpeed: 10, // 设定10秒钟内的任意数值为显示间隔
	    minSpeed: 5 // 设定显示间隔下限，默认间隔3秒出现且不低于3秒
	  })
	  </script>
	  

>   custom 【说明】
> 1. 自定义数组与html片段标签对应，有多少个标签则数组长度就为多长，可灵活使用；
> 2. 数组元素可传递三种类型参数，数字、字符串、数组；
> 3. 数字则对应标签渲染从1到该数字区间任意数字
> 4. 'name'：随机名字。'phone'：随机手机号。空则为两者混合
> 5. 数组则对应标签随机渲染该数组内的元素

#### 参与贡献

1. Fork 本项目
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request
