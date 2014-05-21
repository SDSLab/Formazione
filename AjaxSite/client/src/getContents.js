var clicked=0;
var refreshcont=0;

var getContents= {

	init:function(){
		getContents.eventStart();
		getContents.refreshPage();
		getContents.clickLink();
	},

	eventStart:function(){
	
		$( document ).ajaxStart(function() {
		
			$('#contents.visible').fadeOut("slow",function(){
				$('#contents.visible').removeClass('visible');
			});
			
			$( '#container' ).addClass('load');
		});
	},
	
	refreshPage:function(){
	
		clicked=$(location).attr('href');
		refreshcont=clicked.split('#/')[1];
		console.log(refreshcont);
		
		$.get( 'http://localhost/Formazione/AjaxSite/server/pages/'+refreshcont+'.php', function( data ) {
		
			$( '#contents' ).delay(5000).queue(function(){
				$( '#container' ).removeClass('load');
				$( '#contents' ).addClass('visible');
				$(this).html( data ).clearQueue();
				$( '#contents.visible' ).fadeIn("slow");

			});
		});
	},
	
	clickLink:function(){
	
		$('nav ul li a').on('click', function(){

			clicked=$(this).text().toLowerCase();
			$.get( 'http://localhost/Formazione/AjaxSite/server/pages/'+clicked+'.php', function( data ) {
			
				$( '#contents' ).delay(5000).queue(function(){
					$( '#container' ).removeClass('load');
					$( '#contents' ).addClass('visible');
					$(this).html( data ).clearQueue();
					$( '#contents.visible' ).fadeIn("slow");
				});
			});
		});
	},
}
$(document).ready(getContents.init);