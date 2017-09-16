//document.ready
$(function(){

	$('.externalLink').click(function(ev){
		
		alert('this is prevented ');
		ev.preventDefault();

	});
});
