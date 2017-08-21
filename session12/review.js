

//'bfds'
// var sample2 = [
//     {symbol: 'MSFT', value: '700'},
//     {symbol: 'GOOGLE', value: '600'},
//     {symbol: 'GOOGLE', value: '300'}
//     {symbol: 'APPLE', value: '700'}
//  ];
 //machines to work with any kind of data 
 //

// var person = {
// 	name: 'john',
// 	city:'boston'
// };

//person.name or person['name']


//sample 
//data 

//shouldn't program for this data
//should program for any data 

	// for(var i = 0; ; i++){

	// 	//return or it has error 
	// }
	// for(initialization; condition; increment){

	// }

var stocks = [
    {symbol: 'MSFT', value: '300'},
    {symbol: 'GOOGLE', value: '600'},
    {symbol: 'GOOGLE', value: '300'}
    {symbol: 'APPLE', value: '700'}
 ];

function getStockValue(stocks,stockName){
	//conditions it might fail //javascript is not stictly typed language 
	for(var i = 0; i < stocks.length; i++){
		var stock = stocks[i];
		if(stock.symbol === stockName){
			return stock.value;
		}
	}
    return 'Symbol '+ stockName + ' is not found. !!';
}

//not working wrong 
//[1,2,3,4]
// function getSymbolName(stocks,stockName){
// 	// = --> assignment
// 	// == or === 
// 	//iterate through the array 
// 	//or looping through the array 

// 	if(stockName === 'MSFT'){
// 		return '300';
// 	}
// }



