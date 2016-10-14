/**
 * 标题 图片懒加载
 * 描述
 * 创建日期 16/8/24 下午4:55
 * 作者 lei.wang@wuage.com
 * 版本 0.0.1
 */

var lazyload = module.exports = {};

lazyload.install = function (Vue, options) {

    //options.placeholder: 占位符
    //options.threshold:值为数字,距离视窗底部多少像素开始加载
    //options.clientHeight:可视区高度,主要解决在某些情况下可视区高度为0
    options = options || {};
    options.threshold = isNumber(options.threshold) ? options.threshold : 0;
    options.clientHeight = isNumber(options.clientHeight) ? options.clientHeight : 0;
    var stack = {};
    var uid = 0;
    var flag = true;
    Vue.directive('lazy', {
        bind: function () {
            this._uid = uid++;
            this._isImg = this.el.nodeName.toUpperCase() === 'IMG';
            if (this._isImg && options.placeholder && !this.el.src) {
                this.el.src = options.placeholder;
            }
        },
        update: function (value) {
            if (this._isImg) {
                stack[this._uid] = {
                    value: value,
                    src: this
                };
                if (flag) {
                    window.addEventListener('scroll', compute, false);
                }
                flag = false;
                this.vm.$nextTick(()=> {
                    internalCompute(this._uid);
                });
            }
        },
        unbind: function () {
            if (stack[this._uid]) {
                delete stack[this._uid];
            }
        }
    });

    //手动触发一次懒加载计算
    Vue.prototype.$lazyload = function () {
        compute();
    }

    function internalCompute(key) {
        let item = stack[key];
        let clientHeight = options.clientHeight || document.documentElement.clientHeight || window.innerHeight;
        if (item && item.value && item.src.el.getBoundingClientRect().top - clientHeight <= options.threshold) {
            item.src.el.src = item.value;
            if (options.class) {
                item.src.el.classList.add(options.class);
            }
            delete stack[key];
        }

        if (Object.keys(stack).length === 0) {//清除事件
            flag = true;
            window.removeEventListener('scroll', compute, false);
        }
    }

    function compute() {
        for (let key in stack) {
            internalCompute(key);
        }
    }

    window.addEventListener('scroll', compute, false);

}

function isNumber(obj) {
    return Object.prototype.toString.call(obj) === '[object Number]'
}
