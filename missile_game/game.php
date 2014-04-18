<div id="game">
		<button type="button" id="btnGo" class="fa fa-arrow-circle-o-right"></button>
		<button type="button" id="btnReturn" class="fa fa-arrow-circle-o-left"></button>
	


	
	
	<div id="sky">

		
	
			<div id="rocket" >
					<div id="container">
					<i class="fa fa-rocket"  id="missile"></i> 
					</div>
			</div>
		
	</div>
	
	
	
	<div id="floor">
			
	</div>
	
	
	
			
			
	<script>	
		$('#btnGo').click( function() {
			$('#container').addClass("rocketrotateaxis1").removeClass("rocketrotateaxis2");
			$('#missile').addClass("rocketrotaterocket1").removeClass("rocketrotaterocket2");;
		});
	
		$('#btnReturn').click( function() {
			$("[class='rocketrotateaxis1']").addClass("rocketrotateaxis2").removeClass("rocketrotateaxis1");
			$('#missile').addClass("rocketrotaterocket2").removeClass("rocketrotaterocket1");;
		});
	</script>

			
				
</div>