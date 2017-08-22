
function deletenthindex(index){
	var data = [10,5,3,40,50];
	data.splice(index,1);
	return data;
      
}
console.log(deletenthindex(2));


var stocks = [
    {symbol: 'MSFT', value: "300"},
    {symbol: 'GOOGLE', value: '600'},
    {symbol: 'APPLE', value: "700"},
    {symbol:'GOOGLE',value:"300"}
    ];
function getsymbolname(stocks,symbolname){
	for (i=0; ;i++){
		if (stocks[i].symbol === symbolname){
			return stocks[i].value;
		}
	}
}
console.log(getsymbolname(stocks,'GOOGLE'));

function getlatestsymbol(stocks,symbolname){
	for (i=0; ;i++){
		if (stocks.indexOf(symbolname,i)>1){
			return stocks[i].value;
		}
		
	}
}
console.log(getlatestsymbol(stocks,'GOOGLE'));

