$(document).ready(function(){
	
	$('ul.slideMe li:first-child').addClass("slideCenter");
	$('ul.slideMe li').not('ul.slideMe li:first-child').addClass("slideEnter");
	
	$('.circle').on('click', function(){
		$('.circle.bgcircle').removeClass("bgcircle");
		$(this).addClass("bgcircle");
		
		var index = $('.circle').index(this);
		

		$('ul.slideMe li').eq(index).removeClass('slideEnter slideExit').addClass('slideCenter');
		$('ul.slideMe li').eq(index).prevAll().addClass('slideExit').removeClass('slideCenter slideEnter');
		$('ul.slideMe li').eq(index).nextAll().addClass('slideEnter').removeClass('slideCenter slideExit');
		

		});
		

		
	});

