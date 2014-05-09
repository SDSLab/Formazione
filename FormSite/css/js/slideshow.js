var current=0;
var next=0;
var moviment=0;
var transition=0;

var sliderGet ={

	init:function(){
	
		sliderGet.getCircle();
		sliderGet.aniSlide();
	
	},
	
	getCircle:function(){
	
		var lengthLi=$('ul.slideMe li').length;

		for (var i = 0; i < lengthLi; i++) {
			$('.row.sliderIcon').append('<div class="circle"></div>');
			$('ul.slideMe li').eq(i).attr('data-indexLi', i);
		}
		
		$('.circle:first-child').addClass('bgcircle');
		
		$('.circle').on('click', function(){
			$('.circle.bgcircle').removeClass("bgcircle");
			$(this).addClass("bgcircle");
			});
			
			
		
	},
	
	aniSlide:function(){
	
	$('ul.slideMe li:not(ul.slideMe li:first-child)').addClass('slideEnter');
	$('ul.slideMe li:first-child').addClass('slideCenter');
	
	
	

	
		$('.circle').on('click', function(){
		
			next=$('.circle').index(this);
			current=$('ul.slideMe li.slideCenter').attr('data-indexLi');
			
			if(next>current){
		
				moviment=1;
				transition=('slideExit');
				}else{
				
				moviment=0;
				transition=('slideEnter');
			}
			console.log(current+" "+next+" "+moviment);
			
			
			var i=0;
			
		while(current<next){
			
			
			
			
			
			
			$('ul.slideMe li[data-indexLi="'+current+'"]').addClass(transition).removeClass('slideCenter').delay(500).queue(function(){
			
			
			
			$('ul.slideMe li[data-indexLi="'+next+'"]').delay(500).addClass('slideCenter').queue(function(){
				
				$('ul.slideMe li[data-indexLi="'+next+'"]').removeClass('slideEnter slideExit');
			});;
				});;
				current++;
				
			
		
		
		
		}
			
			
		});
		
		
		
	},
	
};
	
	

$(document).ready(sliderGet.init);