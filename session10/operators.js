//ternary operator 

var a = 10;

var c = 20;

var d = false;

//   condition ? true : false ;
var b = d ? c: a; //ternary operator 
//b --> 20

// if(d === true){
// 	b = c
// }else{
// 	b = a;
// }


//logical and   &&

var a = true;
var b = false;
//and gate 
//truth table 
//true and 
//And truth table 
//0 	0    0
//0		1 	 0
//1		0	 0
//1		1 	 1
if(a && b){
	console.log('hello you are in!');
}else{
	console.log('hello you are out!');
}




//binary and logical operators 

//logical or ||  

var a = 0;//true 
var b = false;
// //0 
// //1-
// var c = !a;//false 
// var d = !!a;//true 

// var b;

//NOT  
//true false
//false true 

//truth table 
//true OR 
//And truth table 
//0 	0    0
//0		1 	 1
//1		0	 1
//1		1 	 1

if(a || b){
	console.log('hello you are in!');
}else{
	console.log('hello you are out!');
}

var partialSum = function(){
	return 10;
}
