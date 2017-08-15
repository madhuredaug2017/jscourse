//object 

//collection of key and value pairs 
//object literal --> {};
var person = { };

//var str = ''; //string literal 
//var str = String('abc');//

var person = {
	name: 'john',
	//date of birth : '10/10/1990', -- >error 
	'date of birth': '10/10/1990',
	//spaces in your key you cannot use with out quotes 
	age: 30,
	dob: '10/10/1990',
	key : 'gold'
	//keyName: 'this is a key name '
	// 'name':'john',
	// "name": 'john'
};

//1) getting the value of key 

//-->a) using . operator 
//sconsole.log('age: is ' + person.age); //30
//-->b using square bracker operator 
// --> console.log('age is ' + person['age']);
//-->1) spaces in your key -- you cannot use .operator 
//:wrong person.date of birth 
    //person['date of birth']

    var keyName = 'age';
    person[keyName] //30
    person['age'] //30 
    person.keyName // undefined
    person.age //30
    person.name //'john'


//2) setting the value to a key 
  person.age = 50;
  //console.log(person.age);//50
  person.friends = ['govardhan','swathi'];
  //console.log(person.friends);//
  person['age'] = 60;

//3) delete the key/value from object 
//var dob = 'age';
delete person.dob;//this will delete key called dob 
//delete person[dob];//this will delete age 
//
//HashMap (easy for lookup)-->searching inside 

//Map,Set 

for(var key in person){
	console.log('key is ' + key + ' value is '+ person[key]);
    //console.log('key is ' + key + ' value is '+ person.key);
}
