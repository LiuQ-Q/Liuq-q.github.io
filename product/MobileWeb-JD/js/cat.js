/*
* @Author: Lenovo
* @Date:   2018-11-21 17:28:58
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-11-22 18:39:08
*/

window.onload = function() {
	deleteBox();
}

/*弹出效果*/
function deleteBox() {
	/**
	 * 1.点击删除按钮  弹出提示框
	 * 2.点击删除按钮  删除按钮打开盖子
	 * 3.点击取消  关闭弹出框  关闭盖子
	 */
	
	/*获取元素*/
	var win = document.querySelector('.jd_win');
	var box = win.querySelector('.jd_win_box');
	var deleteList = document.querySelectorAll('.delete_box');

	var deleteBox = null;

	/*绑定点击事件*/
	for (var i = 0; i < deleteList.length; i++) {
		deleteList[i].onclick = function() {
			//1.点击删除 弹出弹出框、
			win.style.display = 'block';

			box.className = 'jd_win_box bounceInDown';

			//2.打开盖子
			deleteBox = this;

			var deleteUp = deleteBox.querySelector('span:first-child');

			deleteUp.style.webkitTransition = 'all 1s';
			deleteUp.style.transition = 'all 1s';
			
			/*加旋转*/
			deleteUp.style.webkitTransform = 'rotate(-30deg) translateY(2px)';
			deleteUp.style.transform = 'rotate(-30deg) translateY(2px)';

			/*设置旋转原点*/
			deleteUp.style.webkitTransformOrigin = '0 5px';
			deleteUp.style.transformOrigin = '0 5px';
		}
	}

	/*绑定取消事件*/
	document.querySelector('.cancel').onclick = function() {
		/*隐藏弹出框*/
		win.style.display = 'none';

		/*盖子盖回去*/
		var deleteUp = deleteBox.querySelector('span:first-child');
		deleteUp.style.webkitTransform = 'none';
		deleteUp.style.transform = 'none';

	}





}
 




















