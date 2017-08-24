//Finding the numbers which are divisible by 9 but are not a multiple of 5

var array = math.range(600,1000);
var sorted = [];
array.forEach(function(num){
	if ((num%9==0) && (num%5!==0)){
		sorted.push(num);
	}
});
console.log(sorted);

//sorting an array
var arr = ["mary","abraham","david","bob"];
console.log("sorted array:" + arr.sort());
console.log("reversed sorted array:" + arr.sort().reverse());
    	
