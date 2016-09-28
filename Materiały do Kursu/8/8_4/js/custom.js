$(document).ready(function(){

	// Top slider
	$('#top-slider').carousel({
		interval: 4000
	});
	// Promo slider
	$('#promo-slider').carousel({
		interval: 3000
	});

});

// Scroll dla naglowka
$(window).bind('scroll', function(event) {
	if($(window).scrollTop() > 20) {
		$('.main-header').addClass('header-short');
		$('.main-logo img').css('max-height', 28);
	} else {
		$('.main-header').removeClass('header-short');
		$('.main-logo img').css('max-height', 42);
	}
});