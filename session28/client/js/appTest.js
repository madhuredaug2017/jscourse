
$(function(){
	fetchAndDisplay();
});

function fetchAndDisplay(){
  var records = getCustomers(); 
  //what does this  records contain 
  //array of customer objects
  display(records);   
}

//window.location
function getCustomers(){
  var baseUrl = 'http://localhost:8080';//hardcoding static 
  var customers; //undefined
  $.ajax({
  	url: 'http://localhost:8080/Customers',
  	method:'get',
  	datatype: 'json',
  	success: function(data){
  		customers = data;
    },
  	error: function(){

  	},
  	timeout: 30000, //30 seconds 

  }); //asynchronous
  return customers; //undefined 
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