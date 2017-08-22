
function deletenthindex(index){
	var data = [10,5,3,40,50];
	data.splice(index,1);
	return data;
      
}
console.log("data after index 2 is deleted " + deletenthindex(2));


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
console.log("the value of google is:" + getsymbolname(stocks,'GOOGLE'));

var users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
             {'id': 2, 'name': 'Ted', 'last': 'White'},
             {'id': 3, 'name': 'Frank', 'last': 'James'},
             {'id': 4, 'name': 'Ted', 'last': 'Jones'}];
stocks.findLastIndex(stocks, {
  symbol: 'GOOGLE'
});


