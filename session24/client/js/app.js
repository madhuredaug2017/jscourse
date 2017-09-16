$(function(){
   loadNav();
   addValidation();
   $('#btnSave').click(saveNewCustomer);
});

function loadNav(){
	$('.header').load('templates/nav.html',function(){
		
	});
}

function addValidation(){
  //configuration for the validation plugin
  //plugins are adds to the library 
  var obj = {
    messages: {
      name : {
          required: 'Please Enter valid name',
          minlength: jQuery.validator.format("Name should be  {0} characters!!")
      },
      age: {
          required: 'Please Enter valid Age',
           min : 'Age should be greater than 18',
           max : 'Age should be less than 70'
      },
      city: {
         required: 'Please Enter valid City'
      }
    },
    rules: {
      name: {
        required: true,
        minlength: 5,
        email: true
      },
      age : {
        required : true,
        number: true,

        min: 18,
        max: 70,
      },
      city : {
        required: true,
        minlength: 3,
      }
    }

  };
   //prepping it 
  $('#addCustomerForm').validate(obj);
 // $('#addCustomerForm').addClass('');

}

function saveNewCustomer(ev){
	//1) validate the data 
  var isFormValid = $('#addCustomerForm').valid();

  if(!isFormValid){//false -- if condition satisfie 
    //form is not valid display error messages here
    
    return false;
  }

  //2)Prepare data 

	var newCustomerData = {
		name : $('#nameInput').val(),
		age : $('#ageInput').val(),
		city : $('#cityInput').val()
    };

    //3) make a post ajax request with the data
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
    	},
    	error : function(){

    	}
	};
    $.ajax(obj);
}
