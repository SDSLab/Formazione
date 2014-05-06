$(document).ready(function(){

	$('.circle.first').click(function(){
	
		$('.circle').removeClass("bgcircle");
		$(this).addClass("bgcircle");
		$('ul.slideMe').addClass("one");
		$('ul.slideMe.one').removeClass("two three four");
		
		
	
	});
	
	$('.circle.second').click(function(){
		
		$('.circle').removeClass("bgcircle");
		$(this).addClass("bgcircle");
		$('ul.slideMe').addClass("two");
		$('ul.slideMe.two').removeClass("one three four");
		
		
	
	});
	
  	$('.circle.third').click(function(){
		
		$('.circle').removeClass("bgcircle");
		$(this).addClass("bgcircle");
		
		$('ul.slideMe').addClass("three");
		$('ul.slideMe.three').removeClass("one two four");
		
		
	
	});
	
	$('.circle.fourth').click(function(){
	
		$('.circle').removeClass("bgcircle");
		$(this).addClass("bgcircle");
		
		$('ul.slideMe').addClass("four");
		$('ul.slideMe.four').removeClass("one three two");
		
		
	
	});
});