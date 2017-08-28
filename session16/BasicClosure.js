//Closure

function Person(personName){
	//this -- {}
	this.sayHello = sayHello;
	

	function sayHello(){
		var message = 'Hello';
		console.log(message + personName);
	}

	
	//return this 
} 
var peter = new Person('peter');

//

peter.sayHello();

//Closure -- A inner function has access to outerfunction scope or variables 
//even after the outer function is executed;
