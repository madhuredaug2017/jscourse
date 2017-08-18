//function expression 
var sum  = function add(a,b){
	add();
	return a + b;
}

//console.log(fib());
//console.log(fibonacci());

//named function expresssion 
var fibonacci = function fib(n){
	if(n <=1){
		return 1;
	}
	fib(1);
	//fibonacci();
	//ie ie 6,7,8 -- named function expressions 
	//you can acces the function expression variable inside the function 
	//return fib(n-1) + fib(n-2);
}

fibonacci();

//function declarations 
function add(){

	add();
}

//call function within itself -- recursion 

//1,1, 2 ,3,5,8,13 ,21, 34 

function fib(n){
	if(n <= 1){
		return 1;
	}
   return fib(n-1) + fib(n-2);
}
fib(5);// fib(4) + fib(3)
       //fib(3) + fib(2) +  fib(2) + fib(1)
      //fib(2) + fib(1) + fib(2) + fib(2)+ fib(1)
     //fib(1) + fib(0) + fib(1) + fib(1) + fib(0) + fib(1) + fib(0) + fib(1)
     //1 + 1 +1 + 1 + 1 + 1 + 1 = 8

function printfib(n){
	var obj = {};
	for(var i = 0; i <= n ; i++){
		if(i <=1){
			obj[i] = 1;
		}else{
			obj[i] = obj[i-1] + obj[i-2];
		}
		
   }
   console.log(obj[n]);

}