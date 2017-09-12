//Responsibility: To make ajax Service Requests 
//reuse and maintain the code 
//iife (immediate invocation function expresssion)
//write a function and call it immediately 
var ajaxService = (function(){
	//private 
	var baseUrl = 'http://localhost:8100/';

	return {
		get : get,
		post : post
	};

	//generic 
	//customers 
	//movies 
	//produts
	//cb call back -- fuctions 
	function get(endPoint,successCB,errorCB){
     var config =	{
    	url : baseUrl + endPoint+'/',//'http://localhost:8100/customers/'
    	method : 'get',
    	datatype : 'json',
    	timeout: 30000, //30 seconds 
    	success : function(data){
    		successCB(data);
    	},
    	error : function(){
    		errorCB(data);
    	}
	  };
	  $.ajax(config);
	}

	function post(endPoint,data,successCB,errorCB){
		var config =	{
    	url : baseUrl + endPoint+'/',
        method : 'post',
        data: data,
    	datatype : 'json',
    	timeout: 30000, //30 seconds 
    	success : function(data){
    		successCB(data);
    	},
    	error : function(){
    		errorCB(data);
    	}
	  };
	  $.ajax(config);
	}


})();


