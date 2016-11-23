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
        bind: function (el) {
            el._uid = uid++;
            el._isImg = el.nodeName.toUpperCase() === 'IMG';
            if (el._isImg && options.placeholder && !el.src) {
                el.src = options.placeholder;
            }
        },
        inserted: function (el, binding) {
            binding.def.update(el, binding);
        },
        update: function (el, binding) {
            if (binding.value === binding.oldValue) {
                return;
            }
            if (el._isImg) {
                stack[el._uid] = {
                    value: binding.value,
                    el: el
                };
                if (flag) {
                    window.addEventListener('scroll', compute, false);
                }
                flag = false;
                setTimeout(function() {
                    internalCompute(el._uid);
                }, 0);
            }
        },
        unbind: function (el) {
            if (stack[el._uid]) {
                delete stack[el._uid];
            }
        }
    });

    //手动触发一次懒加载计算
    Vue.prototype.$lazyload = function () {
        compute();
    }

    function internalCompute(key) {
        var item = stack[key];
        var clientHeight = options.clientHeight || document.documentElement.clientHeight || window.innerHeight;
        if (item && item.value && item.el.getBoundingClientRect().top - clientHeight <= options.threshold) {
            item.el.src = item.value;
            if (options.class) {
                item.el.classList.add(options.class);
            }
            delete stack[key];
        }

        if (Object.keys(stack).length === 0) {//清除事件
            flag = true;
            window.removeEventListener('scroll', compute, false);
        }
    }

    function compute() {
        for (var key in stack) {
            internalCompute(key);
        }
    }

    window.addEventListener('scroll', compute, false);

}

function isNumber(obj) {
    return Object.prototype.toString.call(obj) === '[object Number]'
}
