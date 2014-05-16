$(document).ready(function(){
	
	$('.iconmenu').on('click', function(){
		
		$('body').addClass('openMenu');
		});
	$('#overlay').on('click', function(){
		
			$('body.openMenu').removeClass('openMenu');
	
		});

  $(window).on('scroll load',function(){
	
	var scrolling= $(this).scrollTop();
	
	 if ($(window).width() > 1200) {
		
		
			
		if (scrolling > 550){
		
			
				$('nav').addClass("fixedmenu");
				
			
			
		}else {
			
				$('nav.fixedmenu').addClass("fadeOutAni");
				
			}
		

		
				$('nav.fixedmenu.fadeOutAni').on('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
				function(e) { $('nav.fixedmenu.fadeOutAni').removeClass('fixedmenu fadeOutAni'); });
		
	}else{$('nav').removeClass("fixedmenu");}
  });
});