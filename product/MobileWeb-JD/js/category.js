/*
* @Author: Lenovo
* @Date:   2018-11-17 12:51:33
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-11-21 17:21:56
*/

window.onload = function() {
	leftSwipe();
	rightSwipe();
}

/*左菜单*/
function leftSwipe () {
	/**
	 * 1、菜单滑动起来
	 * 2、滑动区间
	 * 3、触摸结束 判断是否在定位区间 
	 * 4、点击菜单 改变当前样式
	 * 5、点击菜单 定位到当前菜单为最顶部
	 * 	  如果不满足定位区间就不定位
	 */
	 
	/*获取子父容器*/
	var parentBox = document.querySelector('.jd_category_left');
	var childBox = parentBox.querySelector('ul');

	var parentHeight = parentBox.offsetHeight;
	var childHeight = childBox.offsetHeight;

	/*无缓冲时最大/小滑动距离*/
	var maxY = 0;
	var minY = parentHeight - childHeight;

	/*缓冲距离*/
	var distance = 100;

	/*最大/小滑动定位*/
	var maxSwipe = maxY + distance;
	var minSwipe = minY - distance;

	/*公用方法*/
	var addTransition = function() {
		childBox.style.webkitTransition = "all .2s";
		childBox.style.transition = "all .2s";
	}

	var removeTransition = function() {
		childBox.style.webkitTransition = "none";
		childBox.style.transition = "none";
	}

	var setTranslateY = function(y) {
		childBox.style.webkitTransform = "translateY("+ y +"px)";
		childBox.style.transform = "translateY("+ y +"px)";
	}

	/*1、让菜单滑动*/
	var startY = 0;
	var moveY = 0;
	var distanceY = 0;
	var isMove = false;

	var currY = 0;

	childBox.addEventListener('touchstart', function(e) {
		startY = e.touches[0].clientY;

	});
	childBox.addEventListener('touchmove', function(e) {
		moveY = e.touches[0].clientY;
		distanceY = moveY - startY;
		// console.log(distanceY);

		removeTransition();

		/*2、滑动区间*/
		if ((currY + distanceY) > minSwipe && (currY +distanceY) < maxSwipe) {
			setTranslateY(currY + distanceY);
		}
		
	});
	window.addEventListener('touchend', function(e) {
		currY = currY + distanceY;

		if ((currY + distanceY) > maxY) {
			currY = maxY;
			addTransition();
			setTranslateY(currY);
		}else if ((currY + distanceY) < minY) {
			currY = minY;
			addTransition();
			setTranslateY(currY);
		}else {
			currY = currY + distanceY;
		}

		/*参数重置*/
		startY = 0;
		moveY = 0;
		distanceY = 0;
		isMove = 0;
	});

	/*左侧栏点击效果*/

	var lis = childBox.querySelectorAll('li');

	/*点击切换样式*/
	lq.tap(childBox, function(e) {
		// console.log(e);
		var li = e.target.parentNode;

		for (var i=0; i<lis.length; i++) {
			// li.index = i;
			lis[i].className = "";

			lis[i].index = i;
		}

		li.className = "now";

		/*点击菜单定位到最顶部*/
		var translateY = -li.index * 50;

		if (translateY > minY) {
			currY = translateY;
			addTransition();
			setTranslateY(currY);
		}
		else {
			currY = minY;
			addTransition();
			setTranslateY(currY);
		}

	});

}

/*右菜单*/
function rightSwipe () {

	itcast.iScroll ({
		swipeDom: document.querySelector('.jd_category_right'),

		swipeType: 'y',

		swipeDistance: 100





	});




}