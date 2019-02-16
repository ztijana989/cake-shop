$(document).ready(function () {
	$('.js-burger').on('click', function() {
		$(this).toggleClass('open');
		$('.js-nav').toggleClass('open')
	});
});