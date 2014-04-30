$(document).ready(function(){
	$( "li.bar" ).mouseenter(
	
		  function() {
			var widthA = $( this ).width();
			var pos= $( this ).position();
			
			
			
			$( '.barAni' ).animate({ "left": pos.left +"px","width": widthA +"px"}, 250	, "linear" ).clearQueue();

	  })
	  
	  $("ul").mouseleave ( 
		  function(){
			$( '.barAni' ).animate({ "left": "0px","top": "36px", width:"40px"}, 250	, "linear" ).clearQueue()}
		  
	);
	
	
		
	
	
	 

});