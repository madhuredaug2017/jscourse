// Reverse of a string
 
 var str = 'puppy';
     var reverse = str.split('').reverse().join('');
console.log(reverse);

// Palindrome or not.

var str = 'racecar';
     var reverse = str.split('').reverse().join('');
if(str===reverse){
    console.log("Given string is palindrome");
}
else 
{
    console.log("Given string is not palindrome");
}



// min value
function min(arr){
   var value=Math.min.apply(Math,arr);                            
return value;      
}                                                                                              
    var result=min([6,4,3,8,5,10]); 
console.log(result);


//max value 
function max(arr){
   var value=Math.max.apply(Math,arr);                            
return value;                                             
 }  
 var result=max([6,4,3,8,5,10]); 
console.log(result);

// replace all matches of "world" to "global", "This is a world population and this is world count".
var rep = /world/gi;
var string = 'This is a world population and this is world count';
var result= string.replace(rep, 'global');
console.log(result);  


//Getting first five elements
function firstfive(array)
{
	var fiveelem=array.slice(0,5);
	return fiveelem;
}
var five=firstfive([5,10,15,20,25,30,35,40,45]);
console.log(five);

//Removing centermost element
  function remcen(array)
{
	var result=array.splice(2,1);
	return result;
}
var array=[1,2,3,4,5];
var element=remcen(array);
console.log(array);
console.log("removed element is  "+ element);

                                                        
    // find missing number in the given array [1,3,4,5,6]

var a = [1,3,4,5,6]; 
var b = [];

for ( var i = 0; i < a.length; i++ ) {

    if ( (a[i+1] - a[i]) > 1 ) {
        b.push( a[i+1] - a[1] );   
    }
}
console.log(b);