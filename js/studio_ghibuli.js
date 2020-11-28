$(function(){
	$('#hamburger_btn').on('click', function(){
		$(this).toggleClass('on');
    $('.drower').toggleClass('on');
	});

	$(".overlay").show();
	$("#modal-close").on("click",function(){
	$(".overlay").hide();
	});
		

  });



