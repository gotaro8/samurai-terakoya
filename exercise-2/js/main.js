$(function() {


// カルーセル
$('.studio-img').slick({
  autoplay: true,
  dots: true,
  infinite: false,
  autolaySpeed: 2000,
  arrows: true,
  });


  $('.staff').click(function() {
    // staffクラスがクリックされたときに、.ourtrainer-img-staffの画像を表示する
    $('.ourtrainer-img-staff, .ourtrainer-img-staff-open').slideDown(1000);
    // 他の画像を非表示にする
    $('.ourtrainer-img').hide();
});

$('.trainer').click(function() {
    // trainerクラスがクリックされたときに、.ourtrainer-img-trainerの画像を表示する
    $('.ourtrainer-img').slideDown(1000);
    // 他の画像を非表示にする
    $('.ourtrainer-img-staff').hide();
});


  $('.faq-close-1').on('click', function() {
    $('.answer-close-1').slideToggle();
  });

  $('.faq-close-2').on('click', function() {
    $('.answer-close-2').slideToggle();
  });

  $('.faq-close-3').on('click', function() {
    $('.answer-close-3').slideToggle();
  });


  $('.faq-close-1').click(function () {
    $('.faq-question-open-1').toggleClass('active');
});

  $('.faq-close-2').click(function () {
    $('.faq-question-open-2').toggleClass('active');
});

  $('.faq-close-3').click(function () {
    $('.faq-question-open-3').toggleClass('active');
});

 

$(document).ready(function(){
$('.pc-img, .mainvisual-title, .mainvisual-title-2, .sp-img').addClass('show');
});

$(document).ready(function(){
$('.mainvisual-title').addClass('fade-in');
});



$(window).scroll(function(){
  var scroll = $(window).scrollTop();

  if(scroll > 10) {
    $('#header').addClass('shadow');
    $('#header').css('background-color', '#fff');
  } else {
    $('#header').removeClass('shadow');
    $('#header').css('background-color', 'transparent');
  }
});




  $(window).scroll(function() {
    // 現在のスクロール位置を取得
    var scrollTop = $(this).scrollTop();
    
    // ページ上部へのスクロール量が一定以上になったら
    if (scrollTop > 100) { // 100は適宜調整してください
      // pagetopを表示
      $('.pagetop, .header-btn').fadeIn();
    } else {
      // それ以外の場合は非表示
      $('.pagetop, .header-btn').fadeOut();
    }
  });



  $(window).scroll(function() {
    // 現在のスクロール位置を取得
    var scrollTop = $(this).scrollTop();
    
    // ページ上部へのスクロール量が一定以上になったら
    if (scrollTop > 300) { // 100は適宜調整してください
      // explain-img-containを表示
      $(' .explain-img-contain').fadeIn();
    // } else {
    //   // それ以外の場合は非表示
    //   $('.explain-img-contain').fadeOut();
    }
  });

  $(window).scroll(function() {
    // 現在のスクロール位置を取得
    var scrollTop = $(this).scrollTop();
    
    // ページ上部へのスクロール量が一定以上になったら
    if (scrollTop > 1000) { // 100は適宜調整してください
      // explain-img-containを表示
      $(' .explain-img-contain-2').fadeIn();
    // } else {
     
    //   $('.explain-img-contain-2').fadeOut();
    }
  });



  $(".pricecontent").on("scroll", function() {
    var scrollWidth = $(this)[0].scrollWidth; // 要素全体の横幅
    var scrollLeft = $(this).scrollLeft(); // 横方向のスクロール量
    var clientWidth = $(this).width(); // 表示領域の横幅

    if (scrollWidth > clientWidth) {
      $(".scroll-btn-box").fadeOut(); // オーバーフローが発生した場合に非表示にする
    } else {
      $(".scroll-btn-box").fadeIn(); // オーバーフローが解消された場合に表示する
    }
  });


  $('.staff').click(function(){
    $('.underline').addClass('active');
    $('.underline-2').addClass('active');
  });

  $('.trainer').click(function(){
    $('.underline').removeClass('active');
    $('.underline-2').removeClass('active');
  });

});




