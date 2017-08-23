/*program to find numbers thet are div by 9 but are not multiples of 5 in given range*/
var n1=600;
var n2=1000;

for(var i=n1;i<=n2;i++){

    if((i%9==0) && (i%5!==0)){
        console.log(i);
    }
}


/* program to sort the array and print it in reverse*/
var array=['david','abraham','mary','bob'];
console.log(array.sort());
console.log(array.sort().reverse());