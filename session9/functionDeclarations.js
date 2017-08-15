//function declarations and function expressions 

//var sum 

//reusable 
function sum(a,b){
	return a + b ;
	
	//return undefined 
}

var z = sum(1,2);//
console.log(z);//NaN
// var a = 6;
// var b = 3;
// var total = a+ b;

// a = 8;
// b= 4;
// total = a +b;

// var total = sum(6,3)
// total = sum(8,4);
//no concept of method overloading 
function sum(a,b,c){
	//1+2 +Number(undefined) 
	return a+ b+ c;
}

//latest will override 
var total = sum(1,2);
console.log(total); //NaN
var final = sum(1,2,3);
console.log(final);//6


function add(a,b){
	//arguments object (like array )

	var total = 0;
	for(var i = 0 ; i  < arguments.length; i++){
	 total += arguments[i];
	}
	return total;
}

add(1,2,3,4,5,6)//