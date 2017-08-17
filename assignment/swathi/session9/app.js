var arr=[1,4,3,5];
console.log( "maximum=" + Math.max.apply(null,arr));
console.log("Minimum = " +Math.min.apply(null,arr));

var str="java script";
var split= str.split("");
var Reverse = split.reverse();
console.log("Reversed array=" + Reverse.join(""));

var joined = Reverse.join("");

if(str!==joined){
console.log(" palindrome is not True");}

var str1 ="This is a world population and this is world count";
console.log("replaced string =" + str1.replace("world","global"));

var arr2 = [1,3,5,6,7,8,19];
console.log("sliced array first five = "+arr2.slice(0,5));

var arr3=[1,4,7,10,8];
console.log("deleted center most element = " + arr3.splice(arr3.length/2,1));

var arr4 = [1,6,1,3,3,2,7,2,6];
var temp = [];
arr4.forEach(function(element) {
	if (arr4.includes(element)){
       temp = arr4[element];
	}
});
console.log("duplicate element = "+ temp);
