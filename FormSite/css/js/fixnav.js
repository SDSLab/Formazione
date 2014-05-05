$(document).ready(function(){
  $(window).scroll(function(){
	
	var scrolling= $(this).scrollTop();
	
    if (scrolling < 550){
	
		if ($('nav').hasClass("fixedmenu")){
			
				$('nav').removeClass("slideDownAni");
				
				$('nav').addClass("fadeOutAni").delay(400).queue(function(){
					$(this).addClass("full").dequeue();
					$(this).removeClass("fixedmenu").dequeue();
					$(this).removeClass("fadeOutAni").dequeue().clearQueue();
				});
				
				
				
				
			}
			
		
		
	}
	if (scrolling > 550) {
		
			if (!$('nav').hasClass("fixedmenu")){
				$('nav').removeClass("full");
				$('nav').addClass("fixedmenu");
				$('nav').addClass("slideDownAni").clearQueue();
				
			}
			
		}
	

	
	
  });
});