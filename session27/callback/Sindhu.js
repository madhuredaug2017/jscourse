//sindhu

function onDeliverySuccess(){
	console.log('package delivered');
}

function onDeliveryFailure(){
    console.log('package failed');
}

Madhu.deliver('package1','address 1',onDeliverySuccess, onDeliveryFailure);

function onGovardhanDeliverySuccess(){
	console.log('package delivery ')
}
function onGovardhanDeliverError(){
    console.log('package failed ')
}

Govardhan.requestDeliveryForBoss(onGovardhanDeliverySuccess,onGovardhanDeliverError);;

//CB functions 