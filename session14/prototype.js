//prototypes 
//class -- java 
//function -- javascript 

//inheritance -- java and javascript (big difference)
//prototypal inhertiance 
//Classical inheritance 

var car = {
	engine: 'v4',
	make : 'generic'
};
//BaseObject -- {} --> hasOwnProperty

//inheritance -- inheriting or getting parent properties to child 
//parent -- car
//child -- BMW
function BMW(){
  this.make = 'BMW';
  this.model = 'V6';
}

BMW.prototype = car;
//BMW -- car -- Object ({})

//every function inside javascript has prototype property
//if you add some thing to the prototype property that object is inherited 

var sindhusCar = new BMW();
console.log(sindhusCar.engine);//V4
console.log(sindhusCar.make);//BMW
//prototypal chain 
//if i have the key of what is asked for I will use mine 
// if I donot have it, i will use my parent,
//if my parent also doesnt have it, I will look in my parent's parent 
//until i reach base Object //'hasOwnProperty