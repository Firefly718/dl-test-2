// slider
$(function(){
  $('.slider').slick({
    autoplay: true,
    prevArrow: '<span class="prewArrow"><span>',
    nextArrow: '<span class="nextArrow"><span>'
  });
 });

//  burger-menu (HEADER)
$(document).ready(function(){
  $("body > header > div > div > div").click(function(){
    // console.log('есть клик');
    $("body > header > div > div > nav").toggle('slow', 'swing');
  });
});

// burger-menu (FOOTER)
$(document).ready(function(){
  $("#contacts > div > div.footer__menu > div").click(function(){
    console.log('есть клик');
    $("#contacts > div > div.footer__menu > nav").toggle('slow', 'swing');
  });
});