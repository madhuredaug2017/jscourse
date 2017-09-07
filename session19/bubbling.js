$(function(){
 
 $('.grandChild').click(function(ev){

 	alert('this is grandchild');
 });

$('.child').click(function(event){
	event.stopPropagation();
	alert('this is child');
 });

$('.parent').click(function(ev){
	//ev.target
	alert('this is parent');
});




});

//Event Propogation phase
//any event happends there are three phases will run 
//1) Event Capture  Phase ( used in older browsers like (IE))
//2) Target Phase -- where the event happend 
//3) Event Bubbling Phase 
//what is event bubbling,
//It is a phase in event propogation where the targent event handlers
// are 
//run first and then it propogates to the parent and run any
//event handlers are attached and then to the parent's parent
//until it reaches the root element

// element.addEventListenter()
// var btns = document.getElementsByClassName('btn-primary');
// //array 
// if(btns.length > 0){
// 	var btn = btns[0];//
// 	btn.addEventListener('click',onButtonClick,true);
// }