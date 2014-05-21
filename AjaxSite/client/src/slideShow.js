var lenghtUl=0;
var widthUl=0;
var i=0;

var slideShow={

	init:function(){
	
		slideShow.positionElement();
		slideShow.slideContent()
		
	},

	positionElement:function(){
		
		$(window).on('resize load', function(){
			lenghtUl=$('.slider ul li').length;
			widthUl=($('.slider ul li').eq(0).width())*lenghtUl;
			console.log(widthUl);
			
			console.log(lenghtUl);
			
			$('.slider ul li').each( function(i){
			
				$('.slider ul li').eq(i).css("left",100*i+"%");
			
			
			});
		});
		
	},
	
	slideContent:function(){

		lenghtUl=$('.slider ul li').length;
		i=0;
			setInterval(function() {
				
				if(i<lenghtUl){
					$('.slider ul').css("left",-100*i+"%");
					i++;
				}

			}, 5000);
	},
}
$(document).ready(slideShow.init);