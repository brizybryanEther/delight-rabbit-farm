(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        // Keep the logo visible while the page loads, then hide the overlay.
        // Use the window load event to ensure all resources are ready.
        $(window).on('load', function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        });
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Make menu disappear when scrolling
    var navbar = $('.navbar');
    function checkNavbarScroll() {
        if ($(window).scrollTop() > 50) {
            navbar.addClass('navbar--hidden');
            if ($('#navbarCollapse').hasClass('show')) {
                $('#navbarCollapse').collapse('hide');
            }
        } else {
            navbar.removeClass('navbar--hidden');
        }
    }
    $(window).scroll(checkNavbarScroll);
    checkNavbarScroll();

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