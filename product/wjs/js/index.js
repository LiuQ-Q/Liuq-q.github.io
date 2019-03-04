$(function(){
    /* 动态响应式轮播图 */
    banner();
    /* 初始化tabs页 */
    initTabs();
    /* 初始化工具提示 */
    $('[data-toggle="tooltip"]').tooltip()
});

/*动态响应式轮播图*/
function banner(){

  /* 准备图片数据 */
  var myData =[
    {
      "img":"images/slide_01_640x340.jpg",
      "bg":"images/slide_01_2000x410.jpg"
    },
    {
      "img":"images/slide_02_640x340.jpg",
      "bg":"images/slide_02_2000x410.jpg"
    },
    {
      "img":"images/slide_03_640x340.jpg",
      "bg":"images/slide_03_2000x410.jpg"
    },
    {
      "img":"images/slide_04_640x340.jpg",
      "bg":"images/slide_04_2000x410.jpg"
    }
  ];

  /* 渲染的方法 */
  function renderHtml (data){
    /* 当前屏幕的宽度 */
    var width = $(window).width();
    /* 否是移动端 */
    var isMobile = false;
    if(width < 768 ){
      isMobile = true; // 当前的屏幕是移动端
    }
    /* 准备需要解析的数据 */
    /* 点模板对象 */
    var tempaltePoint = _.template($('#template_point').html());
    /* 图片模板对象 */
    var templateImage = _.template($('#template_item').html());
    var pointHtml = tempaltePoint({model:data});
    var imageData = {
      list:data,/*图片数据*/
      isMobile:isMobile/*是不是移动端*/
    };
    var imageHtml = templateImage({model:imageData});
    /*渲染页面*/
    $(".carousel-indicators").html(pointHtml);
    $(".carousel-inner").html(imageHtml);
  }


  /* 在屏幕尺寸改变的时候需要重新渲染页面 */
  $(window).on('resize',function(){
    renderHtml(myData);
  }).trigger('resize');

  /* 在移动端需要 通过手势来控制图片的轮播 左 next 右的 prev  滑动 */
  var startX = 0;
  var moveX =0;
  var distanceX = 0;
  var isMove = false;
  /* 绑定事件 */
  $('.wjs_banner').on('touchstart',function(e){
    /* 获取到第一个触摸点 */
    startX = e.originalEvent.touches[0].clientX;
  });
  $('.wjs_banner').on('touchmove',function(e){
    moveX = e.originalEvent.touches[0].clientX;
    distanceX = moveX-startX;
    isMove = true;
    console.log(distanceX);
  });
  $('.wjs_banner').on('touchend',function(e){
    /* 移动50的距离才认为滑动过 */
    if(Math.abs(distanceX) > 50 && isMove){
      if(distanceX < 0){
        /* 向左滑动  下一张 */
        $('.carousel').carousel('next');/*bootstrap*/
      } else {
        /* 向右滑动  上一张 */
        $('.carousel').carousel('prev');/*bootstrap*/
      }
    }

    /* 参数重置 */
    startX = 0;
    moveX = 0;
    distanceX = 0;
    isMove = false;
  });

}

/* 初始化tabs */
function initTabs(){
  /* 设置父容器的宽度  等于 所有的子容器的宽度 的和 */
  var ul = $('.wjs_product .nav-tabs');
  var lis = ul.find('li');

  var width = 0;

  $.each(lis,function(i,o){
    width += $(o).innerWidth();
  })
  ul.width(width);

  /* 实现在移动端的滑动 */
  mySwipe.iScroll({
    swipeDom:$('.wjs_product_tabsParent').get(0),
    swipeType:'x',
    swipeDistance:50
  });
}