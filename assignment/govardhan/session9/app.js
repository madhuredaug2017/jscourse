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

// find missing number in an array [1,3,4,5,6]

function missingnumbers(array){
Var sum=array.reduce(function(prev,curr){
Return prev+curr;
},0);
Var n=array[array.length-1];
Var SumofN=(n*(n=1)/2);
Console.log(“missing number is”+ SumofN-sum);
}


// replace all matches of "world" to "global", "This is a world population and this is world count".
var rep = /world/gi;
var string = 'This is a world population and this is world count';
var result= string.replace(rep, 'global');
console.log(result);  


//Getting first five elements
var array = [5,10,15,20,25,30,35,40,45]; 
array.slice(0,5);

//Removing centermost element
  var array = [4,6,8,10,12,14,16]; 
delete Array[array.length/2]; 
console.log(array);

// min value
function min(arr){
   var value=math.min.apply(math,arr);                            
return( value);      
}                                                                                              
    var result=min([6,4,3,8,5,10]); 
console.log(result);


//max value 
function max(arr){
   var value=math.max.apply(math,arr);                            
return( value);                                             
 }                                                          
    var result=max([6,4,3,8,5,10]); 
console.log(result);
