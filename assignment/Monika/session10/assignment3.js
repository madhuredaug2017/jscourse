// Remove the centre most element in an array
function del(array)
{
	var result=array.splice((array.length)/2,1);
	return(result);
}
var arr=[1,2,3,4,5];
var answer=del(arr);
console.log(arr);
console.log(answer);



//REVERSE A STRING
function reversestring(str)
{
var rev=str.split("").reverse().join("");
return(rev);
}
var reverse=reversestring("TANUJA");
console.log(reverse);

//duplicate elements
var arr4 = [1,6,1,3,3,2,7,2,6];
 var temp = [];
 arr4.forEach(function(element) {
   if (arr4.includes(element)){
        temp = arr4[element];
   }
 });
 console.log("duplicate element = "+ temp);


//FIRST FIVE ELEMENTS IN AN ARRAY
function firstfive(array)
{
	var fiveelements=array.slice(0,5);
	return(fiveelements);
}
var five=firstfive([1,2,3,4,5,6,7,8]);
console.log(five);


//REPLACE THE WORLD WITH GLOBAL
function replace(sent)
{
	var wor=/world/gi;
	var rep=sent.replace(wor,"global");
	return(rep);
}
var sentence=replace("This is world polpulation and this is world count");
console.log(sentence);


//MISSING NUMBER IN AN ARRAY

  var sum=array.reduce(function(prev,curr)
  {
   return prev+curr;
  },0);          //12
  var array=[1,2,4,5];
  var last=array[(array.length)-1];
  var sumofnum=(last*(last+1))/2;//15
  var diff=sumofnum-sum;
  console.log(diff);

  



//MAX AND MIN IN AN ARRAY
function max(arr)
{
var value=Math.max.apply(Math,arr);                           
return( value);
}                                                              
var result=max([1,2,3,4]); 
console.log(result);

function min(arr)
{
var value1=Math.min.apply(Math,arr);                           
return( value1);
}                                                              
var result1=min([1,2,3,4]); 
console.log(result1);


//CHECK IF IS A PALINDROME
function palindrome(str)
{
var palind=str.split("").reverse().join("");
return(palind);	
}
var string="MOM";
var string1=palindrome(string);
if(string===string1)
{
console.log("It is a palindrome");	
}
else
{
console.log("It is not a palindrome");	
}


//Missing number in an array
function missing(arr)
{
for(i=0;i<arr.length;i++)
{
if(arr[i]!== i)
{
return(a[i]);
}
}	
}

var array=[0,2,4,6,8];
var miss=missing(array);
console.log(miss);