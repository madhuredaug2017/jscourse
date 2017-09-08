//using splice delete index 2
var arr= [10,5,3,40,50];
var index=arr.splice(2,1);
console.log(index);
console.log(arr);

//using functions
var arr= [10,5,3,40,50];
function deleteNthIndex(){
	var index=arr.splice(2,1);
console.log(index);
}
deleteNthIndex();
console.log(arr);

