
function onButtonClick(){
  alert(' hello button is clicked ')
}

var btns = document.getElementsByClassName('btn-primary');
//array 
if(btns.length > 0){
	var btn = btns[0];//
	btn.addEventListener('click',onButtonClick);
}

//with out jquery 


//add click handler 
//register the click handle 
$(document).ready(function(){
 	//click 
 	//bind 
 	//registering the event handler  on the element 
 	//$('.specialBtn').bind('click', onSpecialButtonClick);

 	$('.specialBtn').click(onSpecialButtonClick);

 	//to unregister 
    $('.specialBtn').unbind('click');

    //on 


});

function onSpecialButtonClick(){
	alert(' special btn is clicked');
}

// $(function(){

// });