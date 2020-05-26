$(document).ready(function() {
	$('.burger__link').click(function() {
		$('.menu').slideToggle('300')
		$('.burger:first-child').toggleClass('top')
		$('.burger:nth-child(2)').toggleClass('middle')
		$('.burger:last-child').toggleClass('bottom');
	});
});