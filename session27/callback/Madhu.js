
//do some work 
//parcel guy (deliver some thing I will deliver)
//cb -- call back 
function deliver(package,address, deliverySuccessCB,deliveryErrorCB){

	//if the task is synchronous 
	//delivery takes zero time 
	//delive
	// if(success){
	//  //ajax asynchronous 
	//  //Asynchronous Javascript and XML
	//  //take some time
	//  //it depends on internet and network
 //     return true;
	// }else {
	//  return false;
	// }
	
	$.ajax({
		url: 'someurl',
		success:function(){
			deliverySuccessCB();
		},
		error: function(){
			deliveryErrorCB();
		}
	})
	
	

	//you will ask them to pass call back functions 

	//done 

}
//usps delivery confirmation
//token (receipt) tracking number
//email address 
//

//both of them wants to know once the delivery is done 
// delivery will take some time 
//how should madhu let them know this delivery is done 
