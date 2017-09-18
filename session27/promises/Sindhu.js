
Madhu.deliver('package1','address 1')
     .then(function(){
     	console.log('Hurray delivery is done ');
     },function(){
     	console.log('Oops some problem with delivery');
     });

Govardhan.requestDeliveryForBoss('task1')
         .then(function(){
         	console.log('This is delivered too !!');
         });