$(function() {

  let screenMode = screen.width > 768 ? true : false
	/* fullPage 插件配置 */
	$('#fullPage').fullpage({
    // sectionsColor: ['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
    navigation: screenMode,
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

  /* 屏幕小于 768 首页动画延时变化 */
  if (!screenMode) {
    $('.info-box.animated').removeClass('delay-2s').addClass('delay-1s')
  }

  /* nav 中的跳转 */
  $('.header-product').click(function() {
    $.fn.fullpage.moveTo( 4 );
  });
  $('.header-about').click(function() {
    $.fn.fullpage.moveTo( 5 );
  });

  /* 第四页点击切换 */
  $('.content-prev').click(function() {
    var myIndex

    for (var i = 0; i < $('.product').length; i++) {
      if ($('.product').eq(i).hasClass('current')) {
        if (i - 1 < 0) {
          myIndex = $('.product').length - 1
        } else {
          myIndex = i - 1
        }
      }
    }

    // console.log($('.product').eq(1).hasClass('current'))
    $('.product').removeClass('current')
    $('.product').eq(myIndex).addClass('current')
  });
  $('.content-next').click(function() {
    var myIndex

    for (var i = 0; i < $('.product').length; i++) {
      if ($('.product').eq(i).hasClass('current')) {
        if (i + 1 > $('.product').length - 1) {
          myIndex = 0
        } else {
          myIndex = i + 1
        }
      }
    }

    $('.product').removeClass('current')
    $('.product').eq(myIndex).addClass('current')
  });


})