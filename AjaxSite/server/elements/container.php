<div id="container">
	<script>	
		
		$(document).ready(function(){
				
				var clicked=$(location).attr('href');
				var refreshcont=clicked.split("#/")[1];
				console.log(refreshcont);
				
					$( "#container" ).load("http://localhost/Formazione/AjaxSite/server/pages/"+refreshcont);
				
			
			$('nav ul li a').on('click', function(){
				
				clicked=$(this).text().toLowerCase();
				$.get( "http://localhost/Formazione/AjaxSite/server/pages/"+clicked+".php", function( data ) {
				  $( "#container" ).html( data );
				  
				});
				
				
			
			
			});
			
		});
	</script>
	


</div>