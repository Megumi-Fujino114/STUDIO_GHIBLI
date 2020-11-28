$(function(){
	$('#hamburger_btn').on('click', function(){
		$(this).toggleClass('on');
    $('.drower').toggleClass('on');
    });
    
    if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
        $(".overlay").show();
		$("#modal-close").on("click",function(){
		$(".overlay").hide();
        });
    }
	});

	$(".overlay").show();
	$("#modal-close").on("click",function(){
	$(".overlay").hide();
	});

  });



