$(window).on("load", function () {
    $(window).scroll(function () {
        // Get the height of the window
        var windowHeight = $(this).scrollTop() + $(this).innerHeight();

        // For each .fade class, calculate the object's top position
        // If the object's position is less than window's height, it is in view
        // Check if opacity is 0, then fade to 1 with slow speed
        $('.--animated').each(function () {
            var objectTop = $(this).offset().top + ($(this).outerHeight() / 4);
            if (objectTop < windowHeight && !$(this).hasClass('--fadeIn')) {
                $(this).addClass("--fadeIn");
            }
        });
    }).scroll();

    $(window).scroll(function () {
        var $nav = $(".site-header");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    }).scroll();
});

$(document).ready(function () {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        slidesPerView: 2,
        spaceBetween: 32,
        breakpoints: {
            1024: {
                slidesPerView: 2
            },
            425: {
                slidesPerView: 1
            }
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
});