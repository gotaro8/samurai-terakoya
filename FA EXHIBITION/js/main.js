$(document).ready(function() {

  $('.header-open').click(function () {
    console.log("header-open clicked")
    $(this).toggleClass('active');
    $('.header-nav').slideToggle('1000');
  });


  $(window).on('load resize scroll', function() {
    // スクロール位置を取得
    let scroll = $(window).scrollTop();
  
    /*=================================================
    メインビジュアルの拡大・縮小
    ===================================================*/
    mv_scale(scroll);
  });
  
  /*=================================================
  メインビジュアルの拡大・縮小（共通処理）
  ===================================================*/
  function mv_scale(scroll) {
    // 画面幅を取得
    var windowWidth = $(window).width();
  
    // PC表示の場合の処理（画面幅が900pxより大きい場合）
    if (windowWidth > 900) {
      // メインビジュアルのCSS（width）を変更する
      // widthの値をスクロール量にあわせて増やすことで画像を拡大させる
      $('.main-img img').css({
        'width': 100 / 3 + scroll / 10 + '%'
      });
    } else {
      // スマホ表示の場合の処理（画面幅が900px以下の場合）
      // メインビジュアルのCSS（width）を変更する
      // widthの値をスクロール量にあわせて減らすことで画像を縮小させる
      $('.main-img img').css({
        'width': 100 - scroll / 10 + '%'
      });
    }
  }

  $('.contact-content-1, .contact-content-2').hover(function() 
  {
      // ホバー時の動作
      $(this).find('.contact-arrow').animate({
        'margin-left': '10px'
      }, 200); // アニメーションの速度は200ミリ秒
    },
    function() {
      // ホバー解除時の動作
      $(this).find('.contact-arrow').animate({
        'margin-left': '0px'
      }, 200); // アニメーションの速度は200ミリ秒
    }
  );

  // header表示
  $(window).on('scroll', function(){
    if($(this).scrollTop() > 520) {
      $('.header').fadeIn();
    } else {
      $('.header').fadeOut();
    }
  });

  $(window).on('scroll', function(){
    // galleryセクションの位置を取得
    var galleryOffset = $('#gallery').offset().top;
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();

    // galleryセクションの画面内に入った場合
    if(scrollPos + windowHeight > galleryOffset) {
      $('.side-btn').css('right', '-83px');
    } else {
      $('.side-btn').css('right', '-144px');
    }
  });

  $(window).on('scroll', function () {
    var windowHeight = $(window).height();
    var scroll = $(window).scrollTop();
    var accessSection = $('#access').offset().top;
    var contactSection = $('#contact').offset().top;

    // accessセクションが画面内に来た時
    if (scroll + windowHeight > accessSection && scroll + windowHeight < contactSection) {
      $('.background').fadeIn(); // display: noneを外して表示
    } else {
      $('.background').fadeOut(); // 画面外に出た場合に再度非表示
    }
  });



});