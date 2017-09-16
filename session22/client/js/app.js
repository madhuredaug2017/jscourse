$(function(){
   loadNav();
   fetchCustomers();
   $('#addCustomerForm').hide();
   $('#displayCustomers').show();
   $('#btnRefreshCustomers').click(fetchCustomers);
   $('#btnSave').click(saveNewCustomer);
});

function loadNav(){
	$('.header').load('templates/nav.html',function(){
		//
		// $('li').click();//
		// $('li').click();//
		//for every li element a new function is binded 
		//it is memory consumed 
		$('.menuItems').on('click','li',function(){
			//this 
		  var ref =	$(this).find('a').attr('href');
		  if(ref === '#dashboard'){
		  	fetchCustomers();
		  	$('#addCustomerForm').hide();
		  	$('#displayCustomers').show();
		  }else if(ref === '#addCustomer'){
		  	$('#addCustomerForm').show();
		  	$('#displayCustomers').hide();
		  }
		});
		console.log('nav template is loaded');
	});
}


function fetchCustomers(){
    var obj = {
    	url : 'http://localhost:8100/customers/',
    	method : 'get',
    	datatype : 'json',
    	timeout: 30000, //30 seconds 
    	success : function(data){
    		displayCustomers(data);
    	},
    	error : function(){

    	}
	};
    $.ajax(obj)

}

function displayCustomers(records){
	$('#customerRecords tbody').empty();
	//empty will remove all the children elements under me 
	///remove --will remove myself and my children
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

function saveNewCustomer(ev){
	//1)Prepare data 
	var newCustomerData = {
		name : $('#nameInput').val(),
		age : $('#ageInput').val(),
		city : $('#cityInput').val()
    };
    //2) make a post ajax request with the data
    makePost(newCustomerData);

   //default behavior of form  (button on a form )
   //method (get) > data is sent as query string 
   //method (post) >> data as post data 

     ev.preventDefault(); //stopping the default behavior 
     ev.stopPropagation(); //stop the event bubbling 
    //return false;
 
}
function cleanupData(){
	$('#nameInput').val('');
	$('#ageInput').val('');
	$('#cityInput').val('');
}
function makePost(newCustomerData){
	 var obj = {
    	url : 'http://localhost:8100/customer/',
    	method : 'post',
    	datatype : 'json',
    	data : newCustomerData,
    	timeout: 30000, //30 seconds 
    	success : function(){
    		cleanupData();
    		fetchCustomers();
            $('#addCustomerForm').hide();
            $('#displayCustomers').show();

    	},
    	error : function(){

    	}
	};
    $.ajax(obj)
}
