function printfib(n){
	var obj={};
	for(var i=0;i<=n;i++){
		if(i<=1){
		obj[i]= 1;
		}else{
		obj[i]=obj[i-1]+obj[i-2];
		}
	}
	console.log(obj[n]);
}

printfib(5);

//timers 

//1)setTimeout
//2)setInterval 
//setTimeout(fn,period);//period is mentioned in milli seconds 
//only after 2 seconds one time it will run 
var firstTimeoutId = setTimeout(function(){
 console.log('this will be run after 2 seconds ');
}, 2000);
//Assignment

//dom, jquery 
//setTimeout(fn,undefined)
//setTimeout(fn,0);//
//setInterval(fn,0);//
//go through the css selectors 

clearTimeout(firstTimeoutId);//

var count = 0;
//every 3 seconds this will run 
var firstSetIntervalId = setInterval(function(){
	count++;
	if(count === 5){
		clearInterval(firstSetIntervalId);
	}
	console.log('running '+ count + ' time');
},3000);//3 seconds 


//clearInterval is for stopping the interval 