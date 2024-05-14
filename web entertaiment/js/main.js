$(document).ready(function() {
  $(".press-nav").click(function() {
    $(".nav-content").show();
    $(".news-content-news").hide();
  });
  
  $(".news-nav").click(function() {
    $(".nav-content").hide();
    $(".news-content-news").show();
  });

  $(".press-nav").click(function() {
    $(".press-nav").css("border-bottom", "4px solid #000");
    $(".news-nav").css("border-bottom", "2px solid #000");
  });
  
  $(".news-nav").click(function() {
    $(".news-nav").css("border-bottom", "4px solid #000");
    $(".press-nav").css("border-bottom", "2px solid #000");
  });
});