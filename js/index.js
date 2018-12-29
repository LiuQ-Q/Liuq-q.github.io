/*
* @Author: Lenovo
* @Date:   2018-12-14 12:41:19
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-12-19 15:13:22
*/

$(function() {
	// 动态响应式轮播图
	bunner();

});

/*动态响应式轮播图*/
function bunner() {
	/**
	 * 1、获取后台轮播图路径数据(ajax)
	 * 2、判断当前是移动端还是非移动端(屏幕宽度768px以下为移动端)
	 * 3、将后台数据渲染成字符串()
	 * 4、将渲染完成的字符串拼接在对应的盒子中
	 * 5、改变屏幕尺寸重新渲染页面
	 * 6、移动端需要通过手指左右缓动控制轮播图
	 */
	
	/*1、获取后台数据*/
	var myData;
	var getData = function(callback) {
		/*ajax*/
		$.ajax({
			url: 'js/index.json',
			data: {},
			type: 'get',
			dataType: 'json',
			success: function(data) {
				myData = data;
				callback(myData);
			}
		});
	}

	getData();

	// /*2、渲染*/
	// var renderHtml = function() {
	// 	getData(function(data) {
	// 		console.log(data);
	// 	});
	// }
}
