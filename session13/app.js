
//this is a special keyword (reserved key words) in javascript 
//var this  

//this -- instance (java )
//this is contextutal in javascript 
//four different ways you can use this 
//1) Inside a function in an object 
var person = {
	name : 'john',
	age  : 20,
	birthYear : function(){
		return 2017 - this.age;
	}
}

person.birthYear();//1997

var user = {
	
	location: {
		country: 'USA'
	}
};

user.dobYear = person.birthYear;
user.dobYear(); // 1977 

//2) function declaration 
//var age = 10;
//window.age;//

function birthYear(){
	return 2017 - this.age; //2007 
}

birthYear();
var names = ['john','abraham'];
console.log(_.isArray(names));
//window.birthYear();//
//this inside function declaration is usually a global object 
//window 