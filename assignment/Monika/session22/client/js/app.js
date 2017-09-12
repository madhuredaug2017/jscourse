$(function(){
   loadNav();
   fetchActors();
   $('#addActorForm').hide();
   $('#displayActors').show();
   $('#btnRefreshActors').click(fetchActors);
   $('#btnSave').click(saveNewActor);
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
		  	fetchActors();
		  	$('#addActorForm').hide();
		  	$('#displayActors').show();
		  }else if(ref === '#addActor'){
		  	$('#addActorForm').show();
		  	$('#displayActors').hide();
		  }
		});
		console.log('nav template is loaded');
	});
}


function fetchActors(){
    var obj = {
    	url : 'http://localhost:8100/actors/',
    	method : 'get',
    	datatype : 'json',
    	timeout: 30000, //30 seconds 
    	success : function(data){
    		displayActors(data);
    	},
    	error : function(){

    	}
	};
    $.ajax(obj)

}

function displayActors(records){
	$('#actorContainer').empty();
	//empty will remove all the children elements under me 
	///remove --will remove myself and my children
	var row = '<div class="panel panel-default">\
                    <div class="panel-heading">Actor</div>\
                        <div class="panel-body"><img src="#image" alt="" class="img-responsive center-block" /></div>\
                           <div class="panel-footer">\
                             <ul>\
                                  <li>#firstName</li>\
                                  <li>#lastName</li>\
                                  <li>#age</li>\
                                  <li>#dob</li>\
                            </ul>\
                           </div>';  
	
	var html = records.map(function(record){
		return row.replace('#firstName',record.firstname)
		          .replace('#lastName',record.lastname)
		          .replace('#age',record.age)
		          .replace('#dob',record.dateofbirth)
		          .replace('#image',record.imagename);
	});

	var output = html.join('');
	$('#actorContainer').append(output);
}

function saveNewActor(ev){
	

    var newActorData = {
		firstname : $('#firstName').val(),
		lastname : $('#lastName').val(),
		age : $('#age').val(),
		dateofbirth: $('#dateofbirth').val(),
		imagename: $('#Image').val(),
    };
	//1)Prepare data 
	
    //2) make a post ajax request with the data
    makePost(newActorData);

    ev.preventDefault();
    ev.stoppropagation();
    //return false;
 
}
function makePost(newActorData){
	 var obj = {
    	url : 'http://localhost:8100/actor/',
    	method : 'post',
    	datatype : 'json',
    	data : newActorData,
    	timeout: 30000, //30 seconds 
    	success : function(){
    		fetchactors();
            $('#addActorForm').hide();
            $('#displayActors').show();

    	},
    	error : function(){

    	}
	};
    $.ajax(obj)
}
