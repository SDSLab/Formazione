$(document).ready(function(){
	
	$('.circle').on('click', function(){
		$('.circle.bgcircle').removeClass("bgcircle");
		$(this).addClass("bgcircle");
		
		var index = $('.circle').index(this);
		$('ul.slideMe').attr('data-index', index);
	});

	/*
	$('.circle.first').click(function(){
		$('ul.slideMe').addClass("one");
		$('ul.slideMe.one').removeClass("two three four");
		
		
	
	});
	
	$('.circle.second').click(function(){
		$('ul.slideMe').addClass("two");
		$('ul.slideMe.two').removeClass("one three four");
		
		
	
	});
	
  	$('.circle.third').click(function(){
		
		$('ul.slideMe').addClass("three");
		$('ul.slideMe.three').removeClass("one two four");
		
		
	
	});
	
	$('.circle.fourth').click(function(){
		
		$('ul.slideMe').addClass("four");
		$('ul.slideMe.four').removeClass("one three two");

	});
	*/
});