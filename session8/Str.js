//String
var name = 'john';
var person = "peter";
//single quote inside a single quoted string
//escape charactere \
var sentence = 'This is john\'s phone';
sentence = 'This is john"s laptop';
sentence = "This is john's monitor";
sentence = "This is john\"s bag";


//concatenation operator

var firstName = 'Peter';
var lastName = 'Batson';

var fullName = firstName + " " + lastName;  //Peter Batson
//fullName = "Peter Batson";

fullName = fullName + " and age is "+ 30;
//console.log(fullName);

var age = 40;
var after5Years = age + '5'; //'40' + '5' --'405'
//typecasting-- convert one datatype to another type
//implicit type casting --

//console.log(after5Years);//'405'
//string operators
//Number mdn
//es3 es5 and es6(es2015) --

var isValid = true;
//isValid = "this is true";
isValid = false;
//boolean mdn

var arr = [10,20,30,40,50];
//arr  = [10,"john",true,'peter',false];
//java
//String[] arr
//int[] arr
//
//push
//arr = 40;//
arr.push(60);// adds at the end of the array
//console.log(arr);
//console.log('first value is ' + arr[0]);
//pop
//[10,20,30,40,50,60]
arr.pop();//pop out the last one  (removes the last value )
//[10,20,30,40,50]
//shift and unshift
arr.unshift(3);// add at the start of the array
//[3,10,20,30,40,50]
arr.shift();//removes from the beginning of the array
//[10,20,30,40,50]
//arr.length;//6
//iterate through an array or go through every element
// for(initialization;condition;increment){
//
// }
for(var i = 0; i < arr.length; i++){
//  console.log(arr[i]);//
}

var items= [0,true,false,'false','',[],1,100,false];
console.log(items);
//2 and 7
//0,2,4,7
//0 -->  false
//1
//== 
//===
for(var j = 0; j < items.length; j++){
  if(items[j] === false){
    console.log('False found at '+ j + ' and value is '+items[j]);
  }else{
    console.log('False is not at '+ j);
  }
}

//=== vs ==
//=== > check if both the data types are equal
//if datatypes are equal only then it will compare values
//it will not type cast
