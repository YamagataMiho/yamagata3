$(function() {
	$('.Toggle').click(function() {
	   $(this).toggleClass('active');
	  $('.menu').toggleClass('open');
	 });
	});

$(function(){
	var open = $('.modal-open'),
		close = $('.modal-close'),
		container = $('.modal-container');

	open.on('click',function(){	
		container.addClass('active');
		return false;
	});

	close.on('click',function(){	
		container.removeClass('active');
	});

	$(document).on('click',function(e) {
		if(!$(e.target).closest('.modal-body').length) {
			container.removeClass('active');
		}
	});
});

// 申し込み手順 caption
let duration = 500;
$(function(){
    $('.box').hover(slideIn,slideOut);
});

function slideIn(){    
    $('.caption1').stop().animate({ top: "50%"}, duration);
    $('.caption2').stop().animate({ top: "60%"}, duration);
};

function slideOut(){
    $('.caption1').stop().animate({ top: "80%"}, duration);
    $('.caption2').stop().animate({ top: "100%"}, duration);
};


