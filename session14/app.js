//1) object -- this -- > object

var person = {
	name : 'john',
	age : 30,
	getBirthYear: function(currentYear,calendarType){
		return currentYear - this.age;
	}
};

var user = {
	age : 40
};

//user.getBirthYear = person.getBirthYear;

//console.log(user.getBirthYear());//1977
console.log(person.getBirthYear(2017,'georgian'));//1987

//4) we can change the value of this inside a function 
//by using call and apply 
//function -- prototype 
// -- call -- function 
//fn.call(valueForthis,argument1,argument2,)

var developer = {
	age : 20
};

person.getBirthYear.call(developer,2017,'georgian');//1997 
person.getBirthYear.call(person,2017);//1987
person.getBirthYear.call(user,2017);//1977
//apply 
//apply 
//passing parameters to the function
var args = []; 
args.push(2017);
args.push('georgian');
person.getBirthYear.apply(user,args);//1977

//
//important 
// == vs ===
person.getBirthYear.call(undefined,2017,'georgian');


