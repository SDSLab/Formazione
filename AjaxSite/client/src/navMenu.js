
var pos=0;
var posSection=0;

var navMenu ={

	init:function(){
	
		navMenu.changeColor();
		
	},

	changeColor:function(){
	
		pos=$('#container').position();
		posSection=pos.top;
	
		$(window).on('scroll',function(){
		
			
			if($(this).scrollTop() > posSection)
			{
				
				$('nav').addClass("scrolled");
				$('nav ul li img').attr("src","client/assets/img/glassesB.png");
				
			}else{
			
				
				$('nav').removeClass("scrolled");
				$('nav ul li img').attr("src","client/assets/img/glasses.png");
			
			}

		});
	},
	
}
$(document).ready(navMenu.init);