
$(document).ready(function(){
   $('#btnAddTask').click(onAddButtonClicked);
   $('#userInput').keyup(onUserInputkey);
   //dynamic elements recommend to use on 
   //$('#taskContainer').length
   //event bubbling  
   $('#taskContainer').on('click','li.task',onTaskClicked);
b  //$('.task').click(onTaskClicked);
});

function onUserInputkey(e){
	if(e.which === 13){
		onAddButtonClicked();
	}
}

function onAddButtonClicked(){ 
	 var taskEntered =  $('#userInput').val(); 

	  $('#userInput').val(''); 
	  var newTaskElement = $('<li>').text(taskEntered);
      newTaskElement.addClass('task');
      //elements which are not added to dom are called as fragments 
      newTaskElement.appendTo('#taskContainer');
   
}

function onTaskClicked(){
	//inside the click handler 
	//this -- dom element where click haappend  
	var $task = $(this);
	//addClass -- add the class to the element 
	//removeClass
	//hasClass
	//toggleClass
	//<li class="task"> some hting here </li>
	//<li class="task done"> another text </li>
	if($task.hasClass('done')){
		$task.remove();//remove will remove the element from html element 
		//dom element has a class 
	}else{
		$task.addClass('done');
	}
	
}

//jquery function $() -- > selectors
//dom element 
//object

