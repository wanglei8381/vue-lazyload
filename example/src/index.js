/**
 * 标题
 * 描述
 * 创建日期 16/8/24 下午6:15
 * 作者 lei.wang@wuage.com
 * 版本 0.0.1
 */

var vueLazyload = require('../../src')

var Vue = require('vue')

var list = [
  'http://mvimg2.meitudata.com/5632495cbb0e49862.jpg',
  'http://mvimg1.meitudata.com/56cea5d03f5493829.jpg',
  'http://img0.imgtn.bdimg.com/it/u=1067699850,3255733045&fm=214&gp=0.jpg',
  'http://img3.duitang.com/uploads/item/201601/28/20160128230209_iSYUx.jpeg',
  'http://mvimg2.meitudata.com/567fb5596ad4c9059.jpg',
  'http://mvimg2.meitudata.com/56c1c2929bf592928.jpg',
  'http://mvimg2.meitudata.com/569b0bb20a8af8855.jpg',
  'http://scimg.jb51.net/allimg/160403/13-1604032125201L.jpg',
  'http://mvimg1.meitudata.com/5517f3b94c1ba116.jpg'
]

Vue.use(vueLazyload, {
  threshold: 0,
  clientHeight: 500,
  class: 'loaded'
})

window.vm = new Vue({
  el: '#app',
  data: {
    list: []
  },
  mounted () {
    setTimeout(() => {
      this.list = list
    }, 1000)
  }
})
