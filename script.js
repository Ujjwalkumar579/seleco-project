(function () {
    "use strict";
  
    var carousels = function () {
      $("#slider").owlCarousel({
        loop: true,
        center: true,
        margin: 15,
        autoplay:true,
        responsiveClass: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
            
          },
          680: {
            items: 2,
            
          },
          1000: {
            items: 3,
            
          }
        }
      });
    };
  
    (function ($) {
      carousels();
    })(jQuery);
  })();
  
  
  