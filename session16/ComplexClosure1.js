//complex closure examples 

function makeNumberFunctions(){

	var numbers = [];
	//iife -- immedatiate invocate function expression 
	for(var i = 0; i < 10; i++){	
		(function(i){
			//inner or local scope of o of i passed 
			var numbFn = function(){
			//iife and closure 
			//closured variable is accessed by reference 
			//not by copy 
			console.log('value of i is ' + i);
		   };
		   numbers.push(numbFn);
		})(i);
    }
     
     //i = 10 
	return numbers;
}
//closure variables are always pass by reference 


var fncs = makeNumberFunctions();

//fncs -- Array 
//[]

var firstFn = fncs[0];
firstFn();//0

var secondFn = fncs[1];
secondFn();//1
