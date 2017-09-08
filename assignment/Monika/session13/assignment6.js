//multiple of 9 but not a multiple of 5


var array=[];
function mul(arr)
{
	for(i=0;i<arr.length;i++)
	{
      if((arr[i]%9===0)&&(arr[i]%5!=0))
	    {
           array.push(arr[i]);
	    }
	}
	return array;
}
var array1=[];
for (var i=600;i<=1000;i++)
{
array1.push(i);
}

mul(array1);


//Ascending order
function ascend(array)
{
	var result=array.sort();
	return result;
}

console.log("Ascending order of an array is"+ascend(["chinna","monika","tanuja"]));


//Descending order
function descend(array)
{
	var result=array.sort().reverse();
	return result;
}

console.log("Descending order of an array is"+descend(["chinna","monika","tanuja"]));