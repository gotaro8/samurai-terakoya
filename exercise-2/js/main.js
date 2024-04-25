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
    $('.ourtrainer-img-staff').slideDown(1000);
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
$('.pc-img, .mainvisual-title, .mainvisual-title-2').addClass('show');
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


// 　var scrollTimer = null;

// $(window).scroll(function(){
//   clearTimeout(scrollTimer);
//   scrollTimer = setTimeout(function(){

//   var scrollPosition = $(window).scrollTop();
//   if (scrollPosition > 10) {
//     $('#header').css('background-color', '#ffffff'); // ヘッダーの背景色を白に変更
//   } else {
//     $('#header').css('background-color', 'transparent'); // ヘッダーの背景色を透明に変更
//   }
//   }, 10); //250ミリ秒の遅延
//   });





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



});




