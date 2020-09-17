$(window).on('load', function() {

    $(".loading-overlay img").fadeOut(500,
        function() {
            $(this).parent().fadeOut(500);
            $("body").removeClass("overflow")
        });
})

// Scroll To Top Button 
var scrollButton = $(".scroll-top");
$(window).scroll(function() {
    ($(this).scrollTop() >= 500) ? scrollButton.show(600): scrollButton.hide(600);
});
// Click Button to scroll top 
scrollButton.click(function() {
    $("html,body").animate({ scrollTop: 0 }, 600);
});

var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
});
wow.init();


$(document).ready(function() {

    // This is to Open Language menu in large Screens
    $(".language .language-name").click(function() {
        $(".lang-back").fadeIn(300);
    });
    $(".language .language-name").click(function() {
        $(".language .language-list").slideDown(300);
    });
    $(".lang-back").click(function() {
        $(".lang-back").fadeOut(300);
    });
    $(".lang-back").click(function() {
        $(".language .language-list").slideUp(300);
    });

    // This is to Open Language menu in large Screens
    $(".currency .currency-name").click(function() {
        $(".lang-back").fadeIn(300);
    });
    $(".currency .currency-name").click(function() {
        $(".currency .currency-list").slideDown(300);
    });
    $(".lang-back").click(function() {
        $(".lang-back").fadeOut(300);
    });
    $(".lang-back").click(function() {
        $(".currency .currency-list").slideUp(300);
    });


    // This is to Open Language menu in large Screens
    $(".user-terms .config").click(function() {
        $(".overlay-box3").fadeIn(300);
    });
    $(".user-terms .config").click(function() {
        $(".config .config-list").slideDown(300);
    });
    $(".overlay-box3").click(function() {
        $(".overlay-box3").fadeOut(300);
    });
    $(".overlay-box3").click(function() {
        $(".config .config-list").slideUp(300);
    });


    $('.main-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 20,
        rtl: true,
        navText: ["<span class='fas fa-chevron-right'></span>", "<span class='fas fa-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            768: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            992: {
                items: 1,
                nav: true,
                dots: true,
                loop: true
            },
            1200: {
                items: 1,
                nav: true,
                dots: true,
                loop: true
            }
        }
    })


    $('.cat-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 30,
        rtl: true,
        navText: ["<span class='fas fa-chevron-right'></span>", "<span class='fas fa-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
                loop: true
            },
            480: {
                items: 2,
                dots: true,
                nav: false,
                loop: true
            },
            720: {
                items: 3,
                dots: true,
                nav: false,
                loop: true
            },
            992: {
                items: 4,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 4,
                nav: true,
                dots: false,
                loop: true
            }
        }
    });


    $('.sub-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 20,
        rtl: true,
        navText: ["<span class='fas fa-chevron-right'></span>", "<span class='fas fa-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
                loop: true
            },
            500: {
                items: 2,
                dots: true,
                nav: false,
                loop: true
            },
            720: {
                items: 3,
                dots: true,
                nav: false,
                loop: true
            },
            992: {
                items: 4,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 4,
                nav: true,
                dots: false,
                loop: true
            },
            1450: {
                items: 4,
                margin: 30,
                nav: true,
                dots: false,
                loop: true
            }
        }
    });
    $(".mo-tabs a").on("shown.bs.tab", function(e) {
        let $owl = $(".sub-slider .owl-carousel");
        $owl.trigger('refresh.owl.carousel');
    });


    $('.clients .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 30,
        rtl: true,
        navText: ["<span class='fas fa-chevron-right'></span>", "<span class='fas fa-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                dots: true,
                nav: false,
                loop: true
            },
            500: {
                items: 3,
                dots: true,
                nav: false,
                loop: true
            },
            720: {
                items: 4,
                dots: true,
                nav: false,
                loop: true
            },
            992: {
                items: 5,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 5,
                nav: true,
                dots: false,
                loop: true
            },
            1450: {
                items: 6,
                nav: true,
                dots: false,
                loop: true
            }
        }
    });

    //this is to make the features part as owl-carousel slider  
    if ($(window).width() <= 991) {
        $(".features-box").addClass("owl-carousel owl-theme");
        $(".features-box .feature").removeClass("owl-carousel");
        $('.features .owl-carousel').owlCarousel({
            loop: false,
            margin: 10,
            rtl: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    loop: false
                },
                768: {
                    items: 2,
                    nav: false,
                    loop: false
                }
            }
        })
    } else {
        $(".services-content").removeClass("owl-carousel");
        $(".services-content .element").removeClass("owl-carousel");
    };

    // This is To Open search Box In Small Screens
    $(".menu-search .search").click(function() {
        $("body").addClass("overflow");
        $(".overlay-box2").slideDown(300);
    });

    $(".menu-search .search").click(function() {
        $("body").addClass("overflow");
        $(".menu-search .search-icon").removeClass("open-search")
        $(".menu-search .search-icon").addClass("close-search")
        $(".close-search-btn").show(300)
        $(".search-box").slideDown(300);
    });

    $(".close-search-btn,.overlay-box2").click(function() {
        $("body").removeClass("overflow");
        $(".overlay-box2").slideUp(300);
    });

    $(".close-search-btn,.overlay-box2").click(function() {
        $("body").removeClass("overflow");
        $(".menu-search .search-icon").addClass("open-search")
        $(".menu-search .search-icon").removeClass("close-search")
        $(".close-search-btn").hide(300)
        $(".search-box").slideUp(300);
    });


    //This is to Open Side Menu in Small Screens
    $(".menu-search .menu").click(function() {
        $("body").addClass("overflow")
        $(".nav").addClass("menu-open");
        $(".overlay-box").fadeIn(500);
    });

    $(".close,.overlay-box").click(function() {
        $("body").removeClass("overflow")
        $(".nav").removeClass("menu-open");
        $(".overlay-box").fadeOut(500);
    });
    //This is to Open user-config, language & Products Menus in Small Screens Side Menu

    $(".nav .config-name").click(function() {
        $(".nav .config-name").toggleClass("rotate");
        $(".nav .config-list").slideToggle(300);
    });

    $(".nav .currency-name").click(function() {
        $(".nav .currency-name").toggleClass("rotate");
        $(".nav .currency-list").slideToggle(300);
    });

    $(".nav .language-name").click(function() {
        $(".nav .language-name").toggleClass("rotate");
        $(".nav .language-list").slideToggle(300);
    });

    // To Toggle Between Footer Slide Menus
    if ($(window).width() <= 991) {
        $('.collapse[data-parent="#parent"]').on('show.bs.collapse', function() {
            $('.collapse[data-parent="#parent"]').not(this).collapse('hide');
        });
    } else {
        $(".slide-list").addClass("in")
    }
    //This is To rotate after arrows in footer ----------------------------------------

    $(".first .footer-heading").click(function() {
        var x = $(".first .slide-list")
        if (x.hasClass("collapse")) {
            $(".first .footer-heading").addClass("rotate")
            $(".second .footer-heading").removeClass("rotate")
            $(".third .footer-heading").removeClass("rotate")
            $(".last .footer-heading").removeClass("rotate")
        }
    });
    $(".first .footer-heading").click(function() {
        var x = $(".first .slide-list")
        if (x.hasClass("in")) {
            $(".first .footer-heading").removeClass("rotate")
        }
    });


    $(".second .footer-heading").click(function() {
        var x = $(".second .slide-list")
        if (x.hasClass("collapse")) {
            $(".second .footer-heading").addClass("rotate")
            $(".first .footer-heading").removeClass("rotate")
            $(".third .footer-heading").removeClass("rotate")
            $(".last .footer-heading").removeClass("rotate")
        }
    });
    $(".second .footer-heading").click(function() {
        var x = $(".second .slide-list")
        if (x.hasClass("in")) {
            $(".second .footer-heading").removeClass("rotate")
        }
    });

    $(".third .footer-heading").click(function() {
        var x = $(".third .slide-list")
        if (x.hasClass("collapse")) {
            $(".third .footer-heading").addClass("rotate")
            $(".first .footer-heading").removeClass("rotate")
            $(".second .footer-heading").removeClass("rotate")
            $(".last .footer-heading").removeClass("rotate")
        }
    });
    $(".third .footer-heading").click(function() {
        var x = $(".third .slide-list")
        if (x.hasClass("in")) {
            $(".third .footer-heading").removeClass("rotate")
        }
    });


    $(".last .footer-heading").click(function() {
        var x = $(".last .slide-list")
        if (x.hasClass("collapse")) {
            $(".last .footer-heading").addClass("rotate")
            $(".first .footer-heading").removeClass("rotate")
            $(".second .footer-heading").removeClass("rotate")
            $(".third .footer-heading").removeClass("rotate")
        }
    });
    $(".last .footer-heading").click(function() {
        var x = $(".last .slide-list")
        if (x.hasClass("in")) {
            $(".last .footer-heading").removeClass("rotate")
        }
    });

});