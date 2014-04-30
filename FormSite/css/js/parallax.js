$(document).ready(function(){
  $(window).scroll(function(){
    var scrolltot=($("body").scrollTop());
	var dim=50;
	var newvalueX= scrolltot / 3;
	
    $('header').css("background-position", dim + "%" + newvalueX +"px");

  });
});