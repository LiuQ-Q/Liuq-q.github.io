/*
* @Author: Lenovo
* @Date:   2018-11-16 18:16:50
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-11-18 18:25:11
*/

/*公用js文件*/

window.lq = {};

lq.transitionEnd = function(dom, callback) {
	/*绑定事件dom 当触发事件 执行callback*/
	if (dom && typeof dom == 'object') {
		dom.addEventListener('webkitTransitionEnd', function() {
			callback && callback();
		})

		dom.addEventListener('transitionEnd', function() {
			callback && callback();
		})
	}
}

/*封装tap*/
lq.tap = function(dom, callback) {
	if (dom && typeof dom == 'object') {
		var isMove = false;
		var startTime = 0;
		dom.addEventListener('touchstart', function(e) {
			startTime = Date.now();
		});

		dom.addEventListener('touchmove', function(e) {
			isMove = true;
		});

		dom.addEventListener('touchend', function(e) {
			if (!isMove && (Date.now() - startTime) < 150) {
				callback && callback(e);
			}

			isMove = false;
			startTime = 0;

		});
	}
}