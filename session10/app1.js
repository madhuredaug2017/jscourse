

var partialSum = function(){
	return 10;
};

//pass functions as parameters in javascript 

sum(1,partialSum); //11
//-->sum(1,10);// error 
console.log(partialSum());//10
console.log(partialSum);// 3 -5 
partialSum = function(){
	5 + 10;
	//return undefined;
}

console.log(partialSum());//undefined 

sum(1,partialSum);//15, undefined 
//error, 16 
//NaN
function sum(a,b){
	//a 1
	//b function(){}
	//a 1
	//b 12 -14 
	// 1+ undefined --> NaN
	return a + b();
}


