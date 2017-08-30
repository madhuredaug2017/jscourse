//jquery element vs domElement 
//jquery object
//

var jqueryContainer = $('.container');

// var containerDomElements = document.getElementsByClassName('container');

// if(containerDomElements.length > 0){
// 	var domContainer = containerDomElements[0];
// }

var domElementByJquery = jqueryContainer.get(0);
//jqueryContainer[0];

//jqueryElements -- properties 
//domContainer -- properties (innerText,style,innerHTML e.t.c.)
//.length -- 
//jqueryContainer is wrapper around domContainer (shell around domContainer)
//some more easy functions are created on the jquery elements which internally has 
//the dom element 
//.text -- innerText (cross browser compatibile)
//ie 