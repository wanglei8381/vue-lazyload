#vue-lazyload
基于vue的图片懒加载插件,从v0.0.6支持vue2.0

###API
1:安装 npm install vue-img-lazyload <br><br>
2:引入Vue.use(vueLazyimg[,options])<br>
options.placeholder: 预加载图片(默认图片)<br>
options.threshold:值为数字,距离视窗底部多少像素开始加载<br>
options.class:图片样式<br><br>
3:指令<br>
图片<br>
< img v-lazy="src"><br>
< img v-lazy.literal data-src="src"><br><br>
背景图<br>
< div v-lazy="src"><br>
< div v-lazy.literal data-src="src">
