//function declaration (this --> window or globalobject )
var age = 50;
//window.age = 50;
var person = {
	name : 'john',
	age : 30,
	getBirthYear: function(currentYear,calendarType){
		return currentYear - this.age; //2017 - 
	}
};
//this -- Object
//console.log(person.getBirthYear(2017,'something'));
//calling the function with 'this' value as undefined 
var val = person.getBirthYear.call(undefined,2017,'georgian');
console.log(val);

//1) this -- Object 
//2) function declaration -- this =-> window
//3) new --> this -- instance 
//4) call and apply, I can change the value of this by the first parameter 
