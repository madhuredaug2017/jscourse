// celsius to farenheit and farenheit to celsuis
function ftoc(f)
{
return parsefloat((f-32)/1.8);
}

console.log(var Celsuis=ftoc(45));


function ctof(c)
{
return parsefloat(1.8*c)+32;
}
 
 console.log(var farenheit=ctof(60));


//camel Case String
	
	function camelCase(arr)
	{
		for(i=0:i<arr.length;i++)
		{
			var str=arr[i];
			var result=function camelize(str) {
              return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
               return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
               }).replace(/\s+/g, '');
               
               var array=[];
              array.push(result);
              var camelize=array.join('');
}

camelCase(['Camel' , 'caSe']);
		}
	}

	

//Write a function to calculate change with items cost and cash 

//items = [1,6.5,5];
//cash = 20;
//return 7.5


function calculateChange(items,cash){

	var itemscost=items.reduce(function(prev,current))
{ 
	return prev+current;
}
	return cash-itemscost;
}

calculateChange([1,6.5,5],20);
