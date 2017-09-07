$(function (){

	loadHeaderContent();
	loadMainContent();
	loadFooterContent();
	//$('.btnFooterMessage') -- 0
	// $('.btnFooterMessage').click(function(){
	//         	toastr.info('Footer is clicked ');
	//   });

	 $('.footer').on('click','.btnFooterMessage',function(){
				toastr.info('Footer is clicked ');
	 });
	
});

function loadHeaderContent(){
	//load two parameters 
	$('.header').load('templates/header.html', function(){
		//$('#mainHeader .mathSection');
		//chainable
		//$('#mainHeader').find('.mathSection');
		//$('.mainHeader') --> jquery element
		$('.mainHeader').css('background-color','green')
						.css('color','white')
					    .attr('aria-label','this is a aria label')
						.hide()
						 //display : none 
						.show(15000)
						.find('.mathSection').css('background-color','blue');
						
						//loook downwards from parent to child -- find 
						//look upward from child to parent -- closest 
	 

	    //$('');//search the dom for that selector 
	   // $('.mainHeader').css('background-color','green');
	//	$('.mainHeader').css('color','white');
	//	$('.mainHeader').attr('aria-label','this is a aria label');


		// $('.mainHeader').css({'background-color','green', 'color', 'white'})
		// 			        .attr('aria-label','this is a aria label')
		// 				    .hide()
		// 				   //display : none 
		// 				   .show(15000);
	    

		//var bgColor = $('.mainHeader').css('background-color');
		//console.log(bgColor);//'green'
					  //.attr('')
		              //.hide()
					//string green

		//in order to do any css  
		 //setter and getter functions in jquery 
		 //setting the value 
		 //setters return jquery element 
		// $('.mainHeader').css('background-color','green')
		 //get the value 
	//	  $('.mainHeader').css('background-color');
		  // will not return jquery element 
		  //and are not chainable 

		//chainable 

		toastr.info('Header Template Loaded!!');
	});
}

//example 
// function $(){
// 	var jqueryElement  = {
// 		css : function(name,val){
// 			if(val){
// 				//em css for name 
// 				return jqueryElement;
// 			}
// 		},
// 		length: 0
		
// 	}

// 	return  jqueryElement;
// }


function loadMainContent(){
	$('.container').load('templates/main.html .importantStuff',function(){
		toastr.success('Main Conent Loaded');
		$('.mathSection').closest('.mainContent').css('font-size','40px');
	});
}

function loadFooterContent(){
	$('.footer').load('templates/footer.html',function(){
		//$('.btnFooterMessage') //1
			toastr.success('Footer Conent Loaded');
		  // $('.btnFooterMessage').click(function(){
	   //      	toastr.info('Footer is clicked ');
	      // }); 

	});
}

//parent to search inside (use find function)
//child to look upwards in the parent (use closest function)