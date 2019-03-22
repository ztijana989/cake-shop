$(document).ready(function () {
	// Hamburger 
	$('.js-burger').on('click', function() {
		$(this).toggleClass('open');
		$('.js-nav').toggleClass('open');
	});

	// Slick slider
	// Hero slider
	$('.js-hero-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1500,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true,
		responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        arrows: false,
	      }
	    }
	  ]
	});

	// Choose slider
	$('.js-choose-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 1500,
		arrows: true,
		responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        arrows: false,
	        dots: true,
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 640,
	      settings: {
	      	arrows: false,
	        dots: true,
	        slidesToShow: 1,
	      }
	    }
	  ]
	});

	// Testimonials Slider
	$('.js-testimonial-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1500,
		autoplay: true,
		autoplayspeed: 2000,
		arrows: false,
		dots: true,
		fade: true,
	});

	// Fancybox
	$('[data-fancybox="gallery-1"]').fancybox({});
	$('[data-fancybox="gallery-2"]').fancybox({});
	$('[data-fancybox="gallery-3"]').fancybox({});
	$('[data-fancybox="gallery-4"]').fancybox({});

	// Tabs
	$('.js-tab').on('click', function(e) {
		e.preventDefault();
		var currentTab = $(this).data('tab');
		if (!$(this).hasClass('active')) {
			$(this).addClass('active').siblings('.js-tab').removeClass('active');
		}
		$('.section-images-holder').find(`[data-box='${currentTab}']`).addClass('active').siblings('.section-images').removeClass('active');
	});
});