// wow active
// new WOW().init();
$(document).ready(function(){
    $(".featured-carousel").owlCarousel({
        items:5,
        nav:false,
        dots:false,
        autoplay:true,
        loop:true,
        autoplayTimeout:5000,
        margin:30,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:4,
                nav:false
            },
            1000:{
                items:5,
                nav:false
    
            }
        }

    });
   
    //   chatbox
    $(".chatbox__button button").on("click", function(){
        $(".chatbox__support").toggleClass(".chatbox--active");  
      });
      

   // manu scrool
   $(window).on('scroll', function (){   
    var sticky = $('.header-area'),
    scroll = $(window).scrollTop();
    if (scroll >= 190) sticky.addClass('fixed');
    else sticky.removeClass('fixed');

  });





      // offcanvas manu

      $(".header-bar").on("click", function(){
        $(".offcanvas-manu, .offcanvas-overylay").addClass(".active");  
      });
      
      
      $(".manu-close, .offcanvas-overylay").on("click", function(){
        $(".offcanvas-manu, .offcanvas-overylay").removeClass(".active");  
      });
     
  });
  