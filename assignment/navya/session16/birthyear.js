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
user.getBirthYear()=person.getBirthYear();
console.log(person.getBirthYear(2016));
console.log(user.getBirthYear(2017));