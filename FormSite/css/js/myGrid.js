
var widthItem=0;
var heightItem=0;
var widthImage=0;
var heightImage=0;
var posCenter=0;

var myGrid ={

	init:function(){
	
		myGrid.getDimension();
		myGrid.aniElement();
			
	},

	getDimension:function(){
	
		$(window).on('load',function(){
		
		$('.item img').each(function(i){
			widthImage=$(this).width();
			heightImage=$(this).height();
			
			
			if (widthImage>=heightImage){
			
			$('.item').eq(i).attr('data-indexImg',1);
		
			}else{
			
			
			$('.item').eq(i).attr('data-indexImg',0);
			
			}
		
		});});
	
		$(window).on('resize load',function(){
		
		$('.item img').each(function(i){
			widthImage=$(this).width();
			heightImage=$(this).height();
			
			
			if ($('.item').eq(i).attr('data-indexImg')==1){
				
				widthItem=$('.item').eq(i).width();
				
				$('.item').eq(i).css('height',widthItem+"px");
				$('.rowGallery').eq(i).css('height',widthItem+"px");
				$('.item img').eq(i).css('height',100+"%");
				widthImage=$('.item img').eq(i).width();
				
				posCenter=(widthImage-widthItem)/2;
				$('.item img').eq(i).css('left',-(posCenter)+"px");

			}else{
			
				heightItem=$('.item').eq(i).width();
				$('.item').eq(i).css('height',heightItem+"px");
				$('.item img').eq(i).css('width',100+"%");
				heightImage=$('.item img').eq(i).height();
				
				posCenter=(heightImage-heightItem)/2;
				$('.item img').eq(i).css('top',-(posCenter)+"px");
			}
		
		
		});
		});
	},
	
	aniElement:function(){
	
		$('.item').hover(function(){
		
			$(this).find('.description').addClass('aniDes');

		}, 
		  function () {
			$(this).find('.description').removeClass('aniDes');
		  }
		);
	
	},
	
	
}
$(document).ready(myGrid.init);