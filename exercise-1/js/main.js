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
    $('.ourtrainer-img-trainer,.ourtrainer-img-explain').hide();
});

$('.trainer').click(function() {
    // trainerクラスがクリックされたときに、.ourtrainer-img-trainerの画像を表示する
    $('.ourtrainer-img-trainer, .ourtrainer-img-explain').slideDown(1000);
    // 他の画像を非表示にする
    $('.ourtrainer-img-staff').hide();
});


  $('.faq-question-open-1').on('click', function() {
    $('.answer-close-1').slideToggle();
  });

  $('.faq-question-open-2').on('click', function() {
    $('.answer-close-2').slideToggle();
  });

  $('.faq-question-open-3').on('click', function() {
    $('.answer-close-3').slideToggle();
  });


  $(".faq-question-open-1, .faq-question-open-2, .faq-question-open-3").click(function () {
    $(this).toggleClass('active');
});




});