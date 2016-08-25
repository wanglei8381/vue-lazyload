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
    options = options || {};
    options.threshold = isNumber(options.threshold) ? options.threshold : 0;
    var stack = {};
    var uid = 0;
    Vue.directive('lazy', {
        bind: function () {
            this._uid = uid++;
            this._isImg = this.el.nodeName.toUpperCase() === 'IMG';
            if (this._isImg && options.placeholder) {
                this.el.src = options.placeholder;
            }
        },
        update: function (value) {
            if (this._isImg) {
                stack[this._uid] = {
                    value: value,
                    src: this
                };
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

    function internalCompute(key) {
        let item = stack[key];
        if (item && item.value && item.src.el.getBoundingClientRect().top - document.documentElement.clientHeight <= options.threshold) {
            item.src.el.src = item.value;
            delete stack[key];
        }

        if (Object.keys(stack).length === 0) {//清除事件
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