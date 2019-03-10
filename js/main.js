$(document).ready(function () {
	// Hamburger 
	$('.js-burger').on('click', function() {
		$(this).toggleClass('open');
		$('.js-nav').toggleClass('open');
	});

	console.log('aaa');

	// Slick slider
	$('.js-hero-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		arrows: true,
		autoplay: true,
		dots: true,
	});
});