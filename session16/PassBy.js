
//array and objects -- pass by reference 
//String,Number,boolean, date, regexp, null,undefined, function  -- pass by copy 

function compute(method,a,b){
	//a = 1
	if(method === 'add'){
        a = 100 - a;// i have to modify it 
        //a --> 99
		return sum(a,b);
	}else if(method === 'subtract'){
		return diff(a,b);
	}

}

function sum(a,b){
	return a + b;
}

function diff(a,b){
	return a - b;
}

var first = 1;
var second = 2;
//number,string, boolean -- copy of that value is passed 
//xerox copy 
console.log('before add first '+ first); //1
console.log('computed value is ' + compute('add',first,second) );//101
console.log('after add first ' + first); //1
compute('subtract',first,second);

//pass by reference 
//original itself is shared (referred)
var person = {
	name : 'peter',
	age: 40
};

function modifyName(obj){
	obj.name = 'Mr.' + obj.name;
	obj.city = 'newyork';
}
console.log('before '+ person.name); //before peter
modifyName(person);//the original object will be modified 
console.log('after ' +person.name);//after Mr.peter 
//optimize it 
//only arrays and objects are pass by reference 
//remaining are pass by copy(pass by value);


