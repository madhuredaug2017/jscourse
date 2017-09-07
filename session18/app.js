//todo 

$(document).ready(function(){
	//javascript interactive 
	//events 
	//listen for click 

	$('#btnAddTask').click(onAddButtonClicked);
	//anonymys function -- function with out name 
	//function declaration or function expression

	$('#userInput').keyup(onUserInputkey);


});

function onUserInputkey(e){
	//only on enter 
	//keycodes (key in your keyboard has a keycode )
	if(e.which === 13){//key code enter 
		onAddButtonClicked();
	}
}

function onAddButtonClicked(){ 
	//<li class="task"> Read js </li>
	//1) get the user entered task 
   var taskEntered =  $('#userInput').val(); 

   //1 b)clear the user entered text 
   $('#userInput').val(''); 
   //2) create a dynamic li element 
   //create a new li element 
   //jquery will create new li element with  $('<li>')
   var newTaskElement = $('<li>').text(taskEntered);
   newTaskElement.addClass('task');//
   //<li class="task" > read css </li>

   //3)add the newly created li element  to the ul element 
   //steps 
   $('#taskContainer').append(newTaskElement);//

   //$('li');//search in the html if there any li elements (html)

   //get the value attribute of the input element 
   
}