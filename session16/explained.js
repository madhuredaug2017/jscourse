
function Calc(){

}
//methods on the prototype 

//every function has a property of prototype ({})

Calc.prototype = {name : 'peter'}; //inherited 

// var calc1 = new Calc();

// console.log(calc1.name);//s
// //pro


Calc.prototype.add = function(a,b){
	return a +b;
};

Calc.prototype.subtract = function(a,b){
	return a - b;
}

var calc1 = new Calc();
var value = calc.add(1,2);
console.log('output is '+ value);

// var person = {
// 	name : 'bob'
// };
// //1 
// person.age = 100;
// //
// person.city = 'new york';
//3 