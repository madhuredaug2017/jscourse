//responsible for connecting all modules
$(function(){
   loadNav();
   displayCustomers.fetch();
});
//keydown -- keyup
function loadNav(){
	$('.header').load('templates/nav.html',function(){
		
	});
}


