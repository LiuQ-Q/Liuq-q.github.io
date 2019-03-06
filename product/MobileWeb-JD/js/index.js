/*
* @Author: Lenovo
* @Date:   2018-11-16 12:46:26
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-11-16 20:40:54
*/

// 页面加载完成
window.onload = function() {
	search();
	banner();
	downTime();
}

/*搜索栏随滑动颜色变深*/
function search () {
	// 获取搜索盒子
	var searchBox = document.querySelector('.jd_header_box');
	// 获取轮播图盒子
	var bannerBox = document.querySelector('.jd_banner');
	//获取高度
	var height = bannerBox.offsetHeight;

	window.onscroll = function() {
		//获取scrollTop的兼容写法
		var top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

		if (top > height) {
			searchBox.style.background = "rgba(201,21,35,0.85)";
		} else {
			searchBox.style.background = "rgba(201,21,35,"+ 0.85 * (top/height) +")";
		}
	}
}

/*轮播图*/
function banner () {
	/**
	 * 1、自动轮播
	 * 2、小点随着图片轮播作改变
	 * 3、图片盒子能滑动
	 * 4、当滑动不超过一定距离，吸附回去
	 * 5、当滑动的距离超过一定距离，下一张
	 */
	
	 var banner = document.querySelector('.jd_banner');
	 var width = banner.offsetWidth;
	 var imageBox = banner.querySelector('ul:first-child');
	 var pointBox = banner.querySelector('ul:last-child');
	 var points = pointBox.querySelectorAll('li');

	 /*公用方法*/
	 /*添加过渡*/
	 var addTransiton = function() {
	 	imageBox.style.webkitTransition = "all 0.2s";
	 	imageBox.style.transition = "all 0.2s";
	 }
	 /*删除过渡*/
	 var removeTransiton = function() {
	 	imageBox.style.webkitTransition = "none";
	 	imageBox.style.transition = "none";
	 }

	 /*设置定位*/
	 var setTranslateX = function(x) {
	 	imageBox.style.webkitTransform = "translateX("+ x +"px)";
	 	imageBox.style.transform = "translateX("+ x +"px)";
	 }

	 //自动轮播
	 var index = 1;
	 var timer = setInterval(function() {
	 	/*让图片滚动*/
	 	index++;

	 	addTransiton();

	 	setTranslateX(-index * width);
	 },1000);

	 /*无缝滚动*/
	 lq.transitionEnd(imageBox, function() {
	 	if (index >= 9) {
	 		index = 1;
	 		removeTransiton();
	 		setTranslateX(-index * width);
	 	}else if (index <= 0) {
	 		index = 8;
	 		removeTransiton();
	 		setTranslateX(-index * width);
	 	}

	 	setPoint();
	 });

	/*小点随着图片轮播改变*/
	var setPoint = function() {
		/*去除当前样式*/
		for (var i = 0; i < points.length; i++) {
			points[i].className = "";
		}

		points[index - 1].className = "now";
	}

	/*轮播图可以滑动*/
	// 开始时x坐标
	var startX = 0;
	//移动时x坐标
	var moveX = 0;
	//移动距离
	var distanceX = 0;
	//判断是否滑动过
	var isMove = false;
	

	imageBox.addEventListener('touchstart', function(e) {
		clearInterval(timer);
		startX = e.touches[0].clientX;
	});
	imageBox.addEventListener('touchmove', function(e) {
		isMove = true;
		moveX = e.touches[0].clientX;
		distanceX = moveX - startX;
		// console.log(distanceX);

		//滑动时不断给图片作定位
		removeTransiton();
		setTranslateX(-index * width + distanceX);

	});
	//谷歌模拟器问题  touchend的时候可能丢失事件 所以改为window
	window.addEventListener('touchend', function(e) {
		/*吸附回去与滚动到下一张*/
		if (Math.abs(distanceX) < (width/3) && isMove) {
			addTransiton();
			setTranslateX(-index * width);
		}else {
			if (distanceX > 0) {
				index--;
			}else {
				index++;
			}
			addTransiton();
			setTranslateX(-index * width);
		}

		//重置参数
		startX = 0;
		moveX = 0;
		distanceX = 0;
		isMove = false;

		// 开启定时器
		clearInterval(timer);
		timer = setInterval(function() {
	 	index++;

	 	addTransiton();

	 	setTranslateX(-index * width);
	 	},1000);
	});
}

/*倒计时*/
function downTime () {
	/**
	 * 1、得到需要倒计时的时间 固定5小时
	 * 2、每隔1s 计算当前的时间 格式
	 * 3、渲染
	 */
	
	 var time = 5 * 60 * 60;

	 var skTime = document.querySelector('.sk_time');
	 var spans = skTime.querySelectorAll('span');

	 var timer = setInterval(function() {
	 	time--;

	 	if (time < 0) {
	 		clearInterval(timer);
	 		return false;
	 	}

	 	var h = Math.floor(time / 3600);
	 	var m = Math.floor((time%3600) / 60);
	 	var s = time % 60;

	 	spans[0].innerHTML = Math.floor(h/10);
	 	spans[1].innerHTML = h % 10;

	 	spans[3].innerHTML = Math.floor(m/10);
	 	spans[4].innerHTML = m % 10;

	 	spans[6].innerHTML = Math.floor(s/10);
	 	spans[7].innerHTML = s % 10;


	 },1000);
}

















