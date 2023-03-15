$(document).ready(function () {
    $('a[href^="#"]:not(a[href="#"])').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
    if ($(window).width() <= '959') {
        $(".fourth-block").owlCarousel({
            navigation: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            pagination: true,
            loop: true,
            lazyLoad: false,
            nav: true,
            navText: false,
            items: 1,
            margin: 0,
            dots: false
        });
        $(".sert-block").owlCarousel({
            navigation: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            pagination: true,
            loop: true,
            lazyLoad: false,
            nav: false,
            navText: false,
            items: 1,
            margin: 0,
            dots: true
        });
        $(".reviews").owlCarousel({
            navigation: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            pagination: true,
            loop: true,
            lazyLoad: false,
            nav: false,
            navText: false,
            items: 1,
            margin: 0,
            dots: true
        });
    }
    $('.btnCallback').click(function () {
        $('.overlay').fadeIn().addClass('open');
    });
    $('.popup_close').click(function () {
        $('.overlay').fadeOut().removeClass('open');
    });
});