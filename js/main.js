$(function() {

	/* fullPage 插件配置 */
	$('#fullPage').fullpage({
    // sectionsColor: ['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
    navigation: true,
    afterLoad: function (anchor, index) {
    	$('.section').removeClass('current')
    	setTimeout(function () {
    		$('.section').eq(index - 1).addClass('current')
    	},100)
    },
	})

	/* fullPage 屏幕小于 992 变为滑动 */
	/*$(window).resize(function(){
    autoScrolling();
  });

  function autoScrolling(){
    var $ww = $(window).width();
    if($ww < 992){
        $.fn.fullpage.setAutoScrolling(false);
    } else {
        $.fn.fullpage.setAutoScrolling(true);
    }
  }

  autoScrolling();*/








})