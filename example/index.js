/**
 * 标题
 * 描述
 * 创建日期 16/8/24 下午6:15
 * 作者 lei.wang@wuage.com
 * 版本 0.0.1
 */


var vueLazyload = require('../src');

var Vue = require('vue');

var list = [
    'http://img.fengimage.com/Fi6z2JHmhsY6qbcmuVuf4Qve6GLH?imageView2/1/',
    'http://img.fengimage.com/FsCQqxwquLfYzV5_SoyUJfrs9NU3?imageView2/1/',
    'http://img.fengimage.com/FqpXqoWgfum5_ydXdzwd5EMdG9z2?imageView2/1/',
    'http://img.fengimage.com/FriiGQmblFT2wRcM1PWRp7fhrNQg?imageView2/1/',
    'http://img.fengimage.com/Fm6-TMqr544XVWvH29cmqWdxlFoF?imageView2/1/',
    'http://img.fengimage.com/Fh9Q_jldmgvzl0Zb63g1YvFRFoPl?imageView2/1/',
    'http://img.fengimage.com/FhcD4UydQpdS6mgPSgvMRY-6sv_K?imageView2/1/',
    'http://img.fengimage.com/FndVFLF5kLdChWEQOHcoReoiDPUo?imageView2/1/',
    'http://img.fengimage.com/FneZy4q_e2ucfFRhIhNPJ-4FYxmT?imageView2/1/',
    'http://img.fengimage.com/FjnlESfoX4oDTWMz0--5rNNvXv3Q?imageView2/1/',
    'http://img.fengimage.com/FsTz5TIogMu7V0dg4corY7FssqzF?imageView2/1/',
    'http://img.fengimage.com/Fic-_jRRUxCm5_w_NzziWo0-7ks4?imageView2/1/',
    'http://img.fengimage.com/Fl8pZZLPlkfkio3v-kClhLhY2qtA?imageView2/1/',
    'http://img.fengimage.com/Fnh0E_Dk_BsBShcpvSpw7pdOP8tQ?imageView2/1/',
    'http://img.fengimage.com/FmNAM4xD_tJeRTAvtJEU_z2VGFJ9?imageView2/1/'
];

Vue.use(vueLazyload, {
    threshold: 0,
    clientHeight: 500,
    class:'loaded'
});

window.vm = new Vue({
    el: '#example',
    data: {
        list: [],
        src: 'http://img.fengimage.com/FmNAM4xD_tJeRTAvtJEU_z2VGFJ9?imageView2/1/'
    },
    mounted(){
        setTimeout(()=> {
            this.list = list;
        }, 1000);
    }
});