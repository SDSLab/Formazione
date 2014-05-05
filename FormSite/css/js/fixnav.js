$(document).ready(function(){


  $(window).scroll(function(){
	
	var scrolling= $(this).scrollTop();
	
    if (scrolling > 550){
	
		
			$('nav').addClass("fixedmenu");
			
		
		
	}else {
		
			$('nav.fixedmenu').addClass("fadeOutAni");
			
		}
	

	
			$('nav.fixedmenu.fadeOutAni').on('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
			function(e) { $('nav.fixedmenu.fadeOutAni').removeClass('fixedmenu fadeOutAni'); });
	
	
  });
});