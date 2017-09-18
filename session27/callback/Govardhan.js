

//Govardhan
//

function arrangeMeetings(){

}

function requestDeliveryForBoss(task1,sCB,eCB){
  

  function onTask1SuccessCB(){
  	console.log('delivered success');
  	sCB();
  }
  function onTask1ErrorCB(){
  		console.log('delivered error');
  		eCB();
  }
  //for

  //package,address
	//alias 
  Madhu.deliver(package,address,onTask1SuccessCB,onTask1ErrorCB);
}