$(document).ready(function(){
    // Top slider
    $('#top-slider').carousel({
        interval: 4000
    });
    // Promoslider
    $('#promo-slider').carousel({
        interval: 3000
    });
    // Menu mobilne
    mobileMenu();
    // Odliczanie
    $('.timer').countTo();
    // Skrollr
    var s = skrollr.init();
});

// Scroll dla nagłówka
$(window).bind('scroll', function(event) {
    if($(window).scrollTop() > 20) {
        $('.main-header').addClass('header-short');
        $('.main-logo img').css('max-height', 28);
    } else {
        $('.main-header').removeClass('header-short');
        $('.main-logo img').css('max-height', 42);
    }
});

// Menu mobilne
function mobileMenu() {
    $('#mobile-icon').bind('click', function(event) {
        event.preventDefault();
        $('#main-nav-mobile').show();
    });
    $('#mobile-close').bind('click', function(event) {
       event.preventDefault();
        $('#main-nav-mobile').hide();
    });
}