# tuojie website
[网站地址:www.tuojieinfo.com](http://www.tuojieinfo.com)

### 语言与工具
*  html, css, javascript
* node.js, webpack, git, scss, photoshop

### 开发与打包
* 下拉项目

	```
	git@github.com:jackshawn/tuojie-website.git
	```

* 进入项目, 安装依赖  
	
	```
	npm install
	```

* 运行项目

	```
	npm run tuojie
	```
	借助webpack-dev-server, 实现代码热更新, 不需要刷新浏览器

* 编译打包 


	```
	npm run build
	```
	打包后会在当前路径下生成dist目录, dist就是最终生成的项目文件。

* 拷贝部分文件
	此时还需要将图片文件夹与重置浏览器样式的文件拷贝到dist下相应路径。
	
	
	```
	// 拷贝图片
	cp -r img dist
	
	// 拷贝样式表
	cp css/reset.css dist/css
	```