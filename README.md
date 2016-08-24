#vue-lazyload
基于vue的图片懒加载插件

###API
1:安装 npm install vue-img-lazyload <br><br>
2:引入Vue.use(vueLazyimg[,options])<br>
options.placeholder: 占位符<br>
options.threshold:值为数字,距离视窗底部多少像素开始加载<br><br>
3:指令<br>
< img v-lazy="src"><br>
####v0.0.1初始化版本
监听属性变化,完成校验