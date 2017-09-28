var templates = {};
$(function(){
	loadNav();
	loadTemplates();
	
});

function loadNav(){
	$('.header').load('templates/nav.html',function(){
		
	});
}

function loadTemplates(){
	$.get('templates/displayCustomers.html',function(data){
		templates.customer = data;
		fetchAndDisplay();
	});
}


function fetchAndDisplay(){
  getCustomers(function(records){
    display(records);
  }); 
  
  
}
//es7 async await
//cb, promises 
//window.location
function getCustomers(cb){
  //var baseUrl = 'http://localhost:8100';//hardcoding static 
  var customers; //undefined
  $.ajax({
  	url: 'http://localhost:8100/customers',
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
  //template languages (old)
  //
  //handlebars (super fast)
  //jquery template engine
  //underscore template engine 
  //knockout template and data-binding 
 
  //sdlc -- software development life cycle
  //waterfall, agile (scrum)
  //scrum master certified

	$('#customerRecords tbody').remove();
	//template interpolation
	var customerTemplate = templates.customer;
	//html inside javascript 
	//html files 
    
    //1) compile the string html using handlebars 
    //convert the html string to js fuction
    var compiled = Handlebars.compile(customerTemplate);
    //2) pass data to the compiled one to get the result html

    var output = compiled(records);

    //3) append the html output to dom
    $('#customerRecords').append(output);
}

//1) inorder to remove usage of html inside
//javascript they created template engines 

//current javascript ---react ()