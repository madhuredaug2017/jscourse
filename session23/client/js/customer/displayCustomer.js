//responsible for display and handling any events on the display table 
//display customers 
//1) make a ajax call or fetch data 
//2) on the ajax call success, we need to create html for each row 
//3) append the html created to the dom 

var displayCustomers = (function(){

	var customerRecords = [];

	return {
		fetch: fetch,
		display: display
	};

	function fetch(){
		// $('#customerRecords').data('course','madhu');
		// $('#customerRecords').data('month','september');
		// $('#customerRecords').data('year','2017');

		ajaxService.get('customers',onCustomerDataSuccess,onCustomerDataFailure);
		$('#customerRecords thead tr').on('click','th',onTableHederClick);
	}

    function onTableHederClick(){
    	//	var field =  $(this).attr('data-field');
    	var thData = $(this).data(); // 
    	var field = thData.field;

    	var  sortBy = 'ascending';

    	sortCustomerRecords(field,sortBy);
    	display();

    	//data attribute 
    	//data 
    	//dom element -- you can save some data using data function 
    	//if you query the dom element later, you can data back
    	//th -- dom element 
    	//alert( field + ' is clicked');
    	//var dataStoredonTable = $('#customerRecords').data();
    	//example
    	
    }

    function sortCustomerRecords(field,sortBy){
    	  function ascendingSort(a,b){
    	  	//a banana
    	  	//b orange 
    	  	if(a[field] < b[field]){
    	  		return -1;
    	  	}else if(a[field]> b[field]){
    	  		return 1;
    	  	}else{
    	  		return 0;
    	  	}
    	  }

    	  function descendingSort(){
    	  		if(a[field] > b[field]){
    	  			return -1;
	    	  	}else if(a[field]< b[field]){
	    	  		return 1;
	    	  	}else{
	    	  		return 0;
	    	  	}
    	  }
    	//a,b,c,d

    	  //["pineapple","orange"] --> ["orange","pineapple"]
    	  //-1 donot change any thing
    	  //1 swap them 
    	  if(sortBy === 'ascending'){
    	  	customerRecords.sort(ascendingSort);
    	  }else {
    	  	customerRecords.sort(descendingSort);
    	  }
    	  //inplace sorting
    	  
    }

	function onCustomerDataSuccess(records){
		customerRecords = records;
     	display();
	}

	function onCustomerDataFailure(){
		console.log('error while fetching customers!!');

	}

	function display(){
	   $('#customerRecords tbody').empty();
	
	   var row = '<tr>\
	            <td>#name</td>\
	            <td>#age</td>\
	            <td>#city</td>\
	          </tr>';  
	   var html = customerRecords.map(function(record){
		 return row.replace('#name',record.name)
		          .replace('#age',record.age)
		          .replace('#city',record.city);
	    });

		var output = html.join('');
		$('#customerRecords tbody').append(output);

	}

})();

