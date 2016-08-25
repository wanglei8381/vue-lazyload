#vue-lazyload
基于vue的图片懒加载插件

###API
1:安装 npm install vue-img-lazyload <br><br>
2:引入Vue.use(vueLazyimg[,options])<br>
options.placeholder: 预加载图片(默认图片)<br>
options.threshold:值为数字,距离视窗底部多少像素开始加载<br>
options.class:图片样式<br><br>
3:指令<br>
< img v-lazy="src"><br>
####v0.0.3添加class
加载图片时,给图片添加一个class样式,主要是为了图片能够动画显示
####v0.0.2支持数据异步加载
修改数据异步加载时,可视区中的图片不显示,需要滚动才可以显示
####v0.0.1初始化版本
设计v-lazy的指令,功能的基本实现,getBoundingClientRect判断元素的位置