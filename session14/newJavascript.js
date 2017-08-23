//function declaration 
function Car(engineType,carMake,carModel){
	this.engine = engineType;
	this.make = carMake; 
	this.model = carModel; //X6
	this.color = 'black';
}

//function will be executed normally 
var sampleCar = Car('v4','globalCar','globalModel');
console.log(sampleCar);//undefined
//sampleCar.model;//1)undefined 2) globalModel 3) throw error 4) None of the above 
//this -- window 

//instance 
var sindhusCar = new Car('v8','BMW','X6');
sindhusCar.color = 'red';
console.log(sindhusCar.model);//X6 //sindhu['model']
var pradeepsCar = new Car('v6','Ford','Mustang');
console.log(pradeepsCar.color);//black 

//
var sindhusCar = {};
sindhusCar.engine = 'V8';
sindhusCar.make = 'BMW';
sindhusCar.model = 'X6';
sindhusCar.color = 'red';

var pradeepsCar = {};
pradeepsCar.engine = 'V6';
pradeepsCar.make = 'Ford';
pradeepsCar.model = 'Mustang';
pradeepsCar.color = 'black';
//prototypes 
//class -- java 
//function -- javascript 

//inheritance -- java and javascript (big difference)
//prototypal inhertiance 
//Classical inheritance 









