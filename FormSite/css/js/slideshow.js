var sliderGet =function (){

	var lengthLi=$('ul.slideMe li').length;

	for (var i = 0; i < lengthLi; i++) {
		$('.row.sliderIcon').append('<div class="circle"></div>');
	}
	
	$('.circle:first-child').addClass('bgcircle');
	$('ul.slideMe li').not('ul.slideMe li:first-child').addClass('slideEnter');
	
	$('.circle').on('click', function(){
		$('.circle.bgcircle').removeClass("bgcircle");
		$(this).addClass("bgcircle");
		
		var index=$('.circle').index(this);
		
		
			$('ul.slideMe li').eq(index).prevAll().addClass("slideExit").removeClass('slideEnter').delay(1000)
                       .queue(function() {
							
							
							
						
					   
                          
                       });
					   
		
		
	});
	
	
}
$(document).ready(sliderGet);