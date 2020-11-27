$(function(){
	$('#hamburger_btn').on('click', function(){
		$(this).toggleClass('on');
    $('.drower').toggleClass('on');
	});
	// $('.hamburger').on('click', function(){
	// 	$('.drower').toggleClass('on');
	// });
});