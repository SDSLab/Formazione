$(document).ready(function(){
	
	$('ul.slideMe li:first-child').addClass("slideCenter");
	$('ul.slideMe li').not('ul.slideMe li:first-child').addClass("slideEnter");
	
	$('.circle').on('click', function(){
		$('.circle.bgcircle').removeClass("bgcircle");
		$(this).addClass("bgcircle");
		
		var index = $('.circle').index(this);
		
		
		
		$('ul.slideMe li')
		.addClass('slideExit')
		.on('webkitTransitionEnd', function(e) {$('ul.slideMe li').removeClass('slideCenter');});
	
		
		
		
		
			
			
			
				
	
		
	
		
		});
		

		
	});

