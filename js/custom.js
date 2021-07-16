/*!
  *
  *
  * INI CUSTOM JS
  * 
  * 
  */

    ( function($){

    "use strict";

    function animateLoadingBar (animatedEle, transform, opacity){

        animatedEle.css({
            "opacity": opacity,
            "transform": "translate3d("+transform+"%,0,0)",
            "-webkit-transform": "translate3d("+transform+"%,0,0)"
        });
    }






    if($(".carousel").length) {
        $(".carousel").each(function(){
            var thisCarousel = $(this);
            
            var loadingBar = '<div class="loading-bar-wrapper">';
                loadingBar += '<div class="loading-bar-animate">';
                loadingBar += '</div">';
                loadingBar += '</div">';

            thisCarousel.find(".carousel-item").append(loadingBar);


            thisCarousel.find(".carousel-item").each( function() {
                var dataInterval = $(this).data("interval") - 1000;
                
                $(this).find(".loading-bar-animate").css({
                    "transition-duration": dataInterval + "ms",
                    "-webkit-transition-duration": dataInterval + "ms"

                });
            });


            $(window).on("load", function() {

                var firstInterval = thisCarousel.find(".carousel-item.active").data("interval");
                animateLoadingBar(thisCarousel.find(".carousel-item.active").find(".loading-bar-animate"), 0, 1);

                thisCarousel.carousel({
                    ride: "autoplay",
                    interval: firstInterval,
                });
                
                thisCarousel.on("slid.bs.carousel", function(e){
                    animateLoadingBar($(this).find(".carousel-item").find(".loading-bar-animate"), -100, 0);
                    animateLoadingBar($(e.relatedTarget).find(".loading-bar-animate"), 0, 1);

                })

            });







         });
 
        }
        })(jQuery);
