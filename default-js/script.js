// slider
$(function(){
  $('.slider').slick({
    autoplay: true,
    prevArrow: '<span class="prewArrow"><span>',
    nextArrow: '<span class="nextArrow"><span>',
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2
        }
      },
      
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });
 });

//  burger-menu (HEADER - index.html)
$(document).ready(function(){
  $("body > header > div > div > div").click(function(){
    // console.log('есть клик');
    $("body > header > div > div > nav").toggle('slow', 'swing');
  });
});

// burger-menu (FOOTER - index.html)
$(document).ready(function(){
  $("#contacts > div > div.footer__menu > div").click(function(){
    console.log('есть клик');
    $("#contacts > div > div.footer__menu > nav").toggle('slow', 'swing');
  });
});