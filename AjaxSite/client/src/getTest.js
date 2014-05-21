
$(document).ready(function(){

	$( document ).ajaxStart(function() {
		
		$('#contents.visible').fadeOut("slow",function(){
			$('#contents.visible').removeClass('visible');
		});
		
		$( '#container' ).addClass('load');
	});

	var clicked=$(location).attr('href');
	var refreshcont=clicked.split('#/')[1];
	console.log(refreshcont);
	
		
	$.get( 'http://localhost/Formazione/AjaxSite/server/pages/'+refreshcont+'.php', function( data ) {
	
		$( '#contents' ).delay(5000).queue(function(){
			$( '#container' ).removeClass('load');
			$( '#contents' ).addClass('visible');
			$(this).html( data ).clearQueue();
			$( '#contents.visible' ).fadeIn("slow");

		});
	});

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
});
