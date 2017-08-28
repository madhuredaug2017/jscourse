function Calc(){
//constructor 
	this.age = 100;
}

//Calc.prototype = {name : 'peter'};
//Calc.protoype = {};

Calc.prototype.add = function(a,b){
	return a +b; //instance methods inside javascript 
};
Calc.prototype.subtract = function(a,b){
	return a - b;
}

Calc.prototype.multiply = function(a,b){
	return a * b;
}

var calc1 = new Calc();
//constructor == first ran for the first time with the new keyword
var value = calc1.add(1,2);
console.log('output is '+ value);