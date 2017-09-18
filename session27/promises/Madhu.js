

function deliver(package,address){
	var defer = Q.defer();
     
    $.ajax({
		url: 'someurl',
		success:function(data){
			defer.resolve(data);
		},	
		error: function(){
			defer.reject();
		}
	});

	//returning a promise(object)
     return defer.promise;


	//

}
//Angular 
//Q is implemented inbuilt in Angular 
//$q
//$http.then