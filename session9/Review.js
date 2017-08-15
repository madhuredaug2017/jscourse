
//substr  --> (from,length)
//from --> 2 --> start from index 2 , length --3

//substring (from,to)
//from --2, to 3

var name = "Johny Papa!";

console.log('substr: '+name.substr(2,3));
console.log('substring: '+name.substring(2,3)); //exclude to 

//String, Number, Array MDN

//--> how to find a character in a string 

 //y in "Johnny Papa!"
 //name.indexOf('x')  // -1
 // if(name.indexOf('x') > -1){
 // 	console.log('x is found');
 // }
 //name.lastIndexOf

//Regexps --> Codeschool 

///////////////////////////////////////////////////////////

1)arr = [1,2,3] --> [2,4,6] --> map 
2) arr [1,2,3] --> sum --> 1+ 2+ 3 --> reduce 

//map -->transform an array 
arr.map(function(item){
	return item * 2;
})

arr.reduce(function(prev,curr){
	return prev+curr;
},0); // 6 


////////// Map ==> Reduce ----> Hadoop --Big Data ---

