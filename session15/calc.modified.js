
// var total = 0;
// var calc = {
// 	compute: function(a,b){
// 		total = 50;
// 		return a+ b;
// 	}
// };

//iife global variables (window object ) 
//are not disturbed 

var calc = (function(){
     var total = 0;//local variable 
     //compute();
     //instead of function declaration 
     //function expression 
     var compute = function(a,b){
     	return a - b;
     }


	return {
		compute : compute
	};

	

	function compute(a,b){
		total  = 50;
 		return a + b;
	}
})();




//data type of calc -- object 
//one key -- compute