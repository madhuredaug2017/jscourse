//responsible for connecting all modules
$(function(){
   loadNav();
   displayCustomers.fetch();
});

function loadNav(){
	$('.header').load('templates/nav.html',function(){
		
	});
}


