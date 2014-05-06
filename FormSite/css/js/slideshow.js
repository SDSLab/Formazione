$(document).ready(function(){
	
<<<<<<< HEAD

=======
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
		
		
>>>>>>> 66c8eec5ca747228b911c7d4873fad67861dbd42
	
	
<<<<<<< HEAD
	$('.circle').on('click', function(){
		$('.circle.bgcircle').removeClass("bgcircle");
		$(this).addClass("bgcircle");
=======
	$('.circle.second').click(function(){
		$('ul.slideMe').addClass("two");
		$('ul.slideMe.two').removeClass("one three four");
		
>>>>>>> 66c8eec5ca747228b911c7d4873fad67861dbd42
		
		var index = $('.circle').index(this);
		
<<<<<<< HEAD
		
		$('li').attr('data-index', index);
=======
		$('ul.slideMe').addClass("three");
		$('ul.slideMe.three').removeClass("one two four");
		
		
	
>>>>>>> 66c8eec5ca747228b911c7d4873fad67861dbd42
	});

	
<<<<<<< HEAD
=======
	$('.circle.fourth').click(function(){
		
		$('ul.slideMe').addClass("four");
		$('ul.slideMe.four').removeClass("one three two");

	});
	*/
>>>>>>> 66c8eec5ca747228b911c7d4873fad67861dbd42
});