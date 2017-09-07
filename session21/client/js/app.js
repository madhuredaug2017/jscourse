$(function(){
    loadNav();

  	fetchAndDisplayCustomers();

   //displayRecords(people);

});

function loadNav(){
	$('.header').load('templates/nav.html',function(){
		console.log('navigation html is loaded');
	});
}

//webservice 
//XMLHTTPRequest 
//$.ajax

function fetchAndDisplayCustomers(){
	var config = {
		url : 'http://localhost:8100/customers/',
		method: 'get',//http method //fetching record //getting 
		dataType: 'json',
		timeout : 30000,//30 seconds 
		success : function(customers){
			displayRecords(customers);
		},
		error : function(xhr,status,error){
         alert('Unable to fetch data!!');
		},
		complete: function(){
		 alert('always called after success or error');
		}

	};

	$.ajax(config);
	//network request 
	//it will take some time to load 
	//7:34:40 seconds -- > 5 seconds /10 seconds
	//server will respond at later time 
	//asynchronous behavior (not immediately at later time)
	//
}

function displayRecords(records){
	 var row = '<tr>\
     				<td>#name</td>\
     				<td>#age</td>\
     				<td>#city</td>\
     			</tr>';

      var htmlRecords = records.map(function(record){
      	return row.replace('#name',record.name)
       	          .replace('#age',record.age)
                  .replace('#city',record.city);
      });

      var output = htmlRecords.join('');
      $('#customerRecords tbody').append(output);
}