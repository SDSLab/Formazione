$(document).ready(function(){
	
	$('.iconmenu').on('click', function(){
		if(navigator.userAgent.indexOf("MSIE") > 7 ){
			
			$('.navOut').animate({"right":"0"},function(){$('#overlay').css("z-index",400);}).clearQueue();
			$('#main').animate({"left":"-17em"},350);
			
			
			
			
			
			
			}else{$('body').addClass('openMenu');}
		
		});
	$('#overlay').on('click', function(){
		if(navigator.userAgent.indexOf("MSIE") > 7 ){
			$('#main').animate({"left":"0px"},350);
			$('.navOut').animate({"right":"-17em"},350);
			
			
			
			
			
			}else{$('body.openMenu').removeClass('openMenu');}
			
	
		});

		var posNav=$('nav').scrollTop();
		
  $(window).on('scroll load',function(){
	
	var scrolling= $(this).scrollTop();

	 if ($(window).width() > 1200) {
		
		
			
		if (scrolling > 550){
		
			
		
			if(navigator.userAgent.indexOf("MSIE") > 7 ){
				$('nav').addClass("fixedmenu");
				$('nav').css("margin-top","0px");
				$('nav.fixedmenu').animate({"top":"0%"}).dequeue();
				
				
				
			}else{$('nav').addClass("fixedmenu");}

		}else {
				if(navigator.userAgent.indexOf("MSIE") > 7 ){
					$('.fixedmenu').animate({"top":"-65px"},function() {
						$('nav').removeClass("fixedmenu");						
						$('nav').css("margin-top","120px");
						}).dequeue();
						
						
				}else{$('nav.fixedmenu').addClass("fadeOutAni");}
		}
			
			
		
				$('nav.fixedmenu.fadeOutAni').on('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
				function(e) { $('nav.fixedmenu.fadeOutAni').removeClass('fixedmenu fadeOutAni'); });
		
	}else{$('nav').removeClass("fixedmenu");}
  });
});