$(document).ready(function(){
  $(window).scroll(function(){
  
    if ($(this).scrollTop() > 550) {
		if (!$('nav').hasClass('fixedmenu')) {
			$('nav').hide();
		   $('nav').addClass('fixedmenu');
		   $('nav').slideDown( "slow" );
		   }
    } else {
       

	   $('nav').removeClass('fixedmenu');
    }
  });
});