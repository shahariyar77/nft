// manu scrool
$(window).on('scroll', function (){   
  var sticky = $('.chatbox'),
  scroll = $(window).scrollTop();
  if (scroll >= 590) sticky.addClass('.active-chat');
  else sticky.removeClass('.active-chat');

});
