//DOM (Document Object Model)
//Api --public method 
//1)getElementsByTagName
var h1Elements = document.getElementsByTagName('h1');
//[]
//empty array 
for(var i = 0 ; i < h1Elements.length; i++){
	var h1Element = h1Elements[i];
   if(i ===0){
   	  h1Element.style.color = 'red';
   }else if(i === 1){
   	  h1Element.style.color = 'blue';
   }
}
//[]
//each one of the items in the array returned is 
//domElement which represents the  htmltag  on the webpage 

//javascript object which represents the html tag 
//keys and value pairs 

//2)getElementById 
var importantElement = document.getElementById('container');
if(importantElement){
	importantElement.style.color = 'orange';
}

//3)getElementsByClassName 
//es6 html5 
var redBoxElements = document.getElementsByClassName('redbox');
//[] --array 
for(var j = 0 ; j < redBoxElements.length ; j++){
	var redBoxElement = redBoxElements[j];
	redBoxElement.style.border = '5px solid red';
}

//some properties 
//microsoft vs netscape 
//dom standards were not followed 
var ie;
var netscape;
if(ie){
	//lot of code 
}else (netscape{
//lot of code 
}
//hating 
//people did n't like using dom/javascript because of  cross browser issues 

//library which will take care of the cross browser issues 
//instant hit //jquery (john resig)
//server 
//open source --> driven by community -- code is open 
//js -- open source 
//code 
//closed source -- microsoft windows
// open source -- linux 

//code -- community will contribute to it 

//2015 
//40 jquery
//

//javascript file (library written in javascript )

//versions 
//1.x - 1.12
//2.x - 2.8
//3.x - 3.5

//browser support (application needs support of ie 6,7,8,9) ie 9 
//edge 
//code is big  
//ie 10 and above (latest browsers)== 2.x
//3.x (mini jquery )-- angularjs

//download the appropriate version and add it to your html



