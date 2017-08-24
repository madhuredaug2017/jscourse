
// Reverse A String

var str = 'pradeep';
var strReverse = str.split('').reverse().join('');
console.log(strReverse);


//palindrome

var str = 'mom';
var strReverse = str.split('').reverse().join('');
if(str===strReverse){
    console.log("yes");
}
else{
    console.log("no");
}
//min

//max

function getMin(array){
    return Math.min.apply(Math,array);
}

function getMax(array){
    return Math.max.apply(Math,array);
}
var myArray = [1,2,3,4,15,6,7];
var max = getMax(myArray);
console.log(max);

var min = getMin(myArray);
console.log(min);

//Missing number

var a = [0,1,3,4,5,6]; 
var b = [];

for ( var i = 0; i < a.length; i++ ) {

    if ( (a[i+1] - a[i]) > 1 ) {
        b.push( a[i+1] - a[1] );   
    }
}
console.log(b);



//world to global

var re = /world/gi;
var string = 'This is a world population and this is world count';
var result= string.replace(re, 'global');
console.log(result);  



//first five

var a = [1,2,3,4,5,6,7,8,9,10]; 
var b=[];

 for (var i=0;i<=4;i++)
     {
         b.push(a[i]);
     }
console.log(b);

