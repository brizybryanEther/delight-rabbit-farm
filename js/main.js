(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Hide navbar on scroll down, reveal on scroll up
    var lastScrollTop = 0;
    var navbar = $('.navbar');

    $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();

        if (currentScroll > 0) {
            navbar.addClass('position-fixed bg-dark shadow-sm');
        } else {
            navbar.removeClass('position-fixed bg-dark shadow-sm navbar--hidden');
            return;
        }

        if (currentScroll > lastScrollTop && currentScroll > 80) {
            // Scrolling DOWN — hide
            navbar.addClass('navbar--hidden');
        } else {
            // Scrolling UP — reveal
            navbar.removeClass('navbar--hidden');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow').css('display', 'flex');
        } else {
            $('.back-to-top').fadeOut('slow').css('display', 'none');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

})(jQuery);