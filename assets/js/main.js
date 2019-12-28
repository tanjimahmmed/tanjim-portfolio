(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    // -- Java Script animation set --//
    var animation = false,
    animationstring = 'animation',
    keyframeprefix = '',
    domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
    pfx = '',
    elm = document.createElement('div');
    if (elm.style.animationName !== undefined) {
    animation = true;
    }
    if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
            if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
                pfx = domPrefixes[i];
                animationstring = pfx + 'Animation';
                keyframeprefix = '-' + pfx.toLowerCase() + '-';
                animation = true;
                break;
            }
        }
    }
     // -- Typed  Java Script-- //
     if(animation){
         var text = $('.homepage_hero_area .typer_title'),
         textOne = "i'm Front-End Developer",
         textTwo = "i'm Freelancer",
         textThree = "let's work together",
         textFour = "i can create awesome stuff";

         if (!!$.prototype.typer){
             text.typer([textOne, textTwo, textThree, textFour]);
         }
     }
        //Progress Bars function
        $(document).ready(function() {
        var show = true;
        $(window).on("scroll", function() {
            if (!show) return false;
            var w_top = $(window).scrollTop();
            var e_top = $("#about__content").offset().top - 50;
            console.log(w_top + " " + e_top);
            if (w_top >= e_top) {
                $(".skillbar").each(function() {
                    $(this).find(".skill_bar").animate({
                        width: $(this).attr("data-percent")
                    }, 2000)
                });
                // skills numbers
                var time = 2;
                $('#mySkills').each(function() {
                    $('label').each(function() {
                        var
                            i = 1,
                            num = $(this).data('num'),
                            step = 1000 * time / num,
                            that = $(this),
                            int = setInterval(function() {
                                if (i <= num) {
                                    that.html(i);
                                } else {
                                    clearInterval(int);
                                }
                                i++;
                            }, step);
                    });
                });
                show = false;
            }
        });
        });


     // -- counter js -- //
     $('.counter_number span').counterUp({
         delay: 10,
         time: 1000
     });
            
    });
     // -- isotope -- //
     $(".portfolio_filter li").on('click', function(){
         $(".portfolio_filter li").removeClass("active");
         $(this).addClass("active");
         var selector = $(this).attr('data-filter');

         $(".portfolio_list").isotope({
             filter: selector,
         })
     });
     $(".portfolio_list").isotope();

     // -- magnific popup -- //
     $('.popup_link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
     // -- Testimonial area -- //
     
     $(".testimonial_carousel").owlCarousel({
        items:1,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        margin: 30,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

     // -- smooth scroll -- //
     $(".smooth_menu a").on('click', function(e) {
        var anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
        e.preventDefault();
    });

     // -- mobile menu -- //
     $(".menu_triggers").on('click', function(){
         $(".offcanvas_menu").addClass("active");
         $(".offcanvas_menu_overlay").addClass("active");
     });
     $(".menu_close i.fa, .offcanvas_menu_overlay ").on('click', function(){
         $(".offcanvas_menu").removeClass("active");
         $(".offcanvas_menu_overlay").removeClass("active");
     });
     // -- sticky menu -- //
     $(".header_area").sticky({
        topSpacing: 0,
     });
     // -- popup js -- //
    $('#inline-popups,#inline-popups-2,#inline-popups-3,#inline-popups-4,#inline-popups-5,#inline-popups-6,#inline-popups-7,#inline-popups-8,#inline-popups-9,#inline-popups-10').magnificPopup({
        delegate: 'a',
        removalDelay: 400, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true
    });
     // -- wow -- //
    var wow = new WOW({
    mobile: false
    });
    wow.init();
     


   jQuery(window).load(function(){
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
   });

}(jQuery));	
