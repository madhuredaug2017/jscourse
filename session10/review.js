
//1) what is typeof in javascript
/*
A)It defines the variable
B)It gives keys in the object
C)It tells the value contained in that variable
D)It gives the datatype of the object
typeof undefined -->undefined
typeof null --> object
typeof NaN --> Number 
(Number.POSITIVE_INFINITY)
(Number.NEGATIVE_INFINITY)

*/

//2) What is the output of this function 
console.log(sum(10,20)); //30 
//function name -->function declaration 
function sum(a,b){
    a + b;
};

//3) What will the following print 
//7 === '7'
if(add(3,4) === "7"){
console.log('Sum is Equal to 7');
}else{
console.log('Sum not Equal to 7');
}

function add(x,y){
return x + y;
}

