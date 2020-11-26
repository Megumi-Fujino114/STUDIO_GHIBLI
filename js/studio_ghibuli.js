$(function(){
	$('.hamburger').on('click', function(){
		$(this).toggleClass('on');
	});

	$('.hamburger').on('click', function(){
		$('.target').toggleClass('hide');
	});
});