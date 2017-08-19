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

var stocks = [
    {symbol: 'MSFT', value: '300'},
    {symbol: 'GOOGLE', value: '600'},
    {symbol: 'GOOGLE', value: '300'}
  //  {symbol: 'APPLE', value: '700'}
 
];

function getSymbolName(stockName){
	
}

getSymbolName('MSFT');