$(document).ready(function() {

  $('.hamburger').click(function(){
    $(this).toggleClass('active');
    $('.nav-all').toggleClass('active');
    $('#header-nav').toggleClass('active');
  });


  $('.pickup-pic').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });

  // $(window).on('scroll', function () {
  //   var windowHeight = $(window).height();
  //   var scroll = $(window).scrollTop();
  //   var accessSection = $('#feature').offset().top;
  //   // var contactSection = $('#contact').offset().top;

  //   // accessセクションが画面内に来た時
  //   if (scroll + windowHeight > accessSectionn) {
  //     $('.feature-grid').addClass('active'); 
  //   }
  // });


});