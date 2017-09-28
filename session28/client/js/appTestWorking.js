
$(function(){
	fetchAndDisplay();
});

function fetchAndDisplay(){
  getCustomers(function(records){
    display(records);
  }); 
  
  
}
//es7 async await
//cb, promises 
//window.location
function getCustomers(cb){
  var baseUrl = 'http://localhost:8080';//hardcoding static 
  var customers; //undefined
  $.ajax({
  	url: 'http://localhost:8080/Customers',
  	method:'get',
  	datatype: 'json',
  	success: function(data){
  		customers = data;
      cb(data);
    },
  	error: function(){

  	},
  	timeout: 30000, //30 seconds 

  }); //asynchronous
   //undefined 
}

function  display(records){
	$('#customerRecords tbody').empty();
	
   var row = '<tr>\
            <td>#name</td>\
            <td>#age</td>\
            <td>#city</td>\
          </tr>';  
   var html = records.map(function(record){
	 return row.replace('#name',record.name)
	          .replace('#age',record.age)
	          .replace('#city',record.city);
    });

	var output = html.join('');
	$('#customerRecords tbody').append(output);
}