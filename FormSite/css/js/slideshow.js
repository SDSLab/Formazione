$(document).ready(function(){
	

	
	
	$('.circle').on('click', function(){
		$('.circle.bgcircle').removeClass("bgcircle");
		$(this).addClass("bgcircle");
		
		var index = $('.circle').index(this);
		
		
		$('li').attr('data-index', index);
	});

	
});