console.log('program started');

//is it good idea to use try catch 
//not too many try catches 
//every function try catches 
//browsers try to optimize the code,try cathes are not optimized by browser
//where as non-try catches are optimizes 
//performance will reduce 

//application becomes slow 
//20,000 50,0000 --> more than 100,000

//use of try catch, the errors will not block the program 
// try{
// console.log('after first error');
// sum(4,5);
// console.log('after second error');
// }catch(err){
	
// 	console.log('some error occurred due to '+
// 	  err.message + ' and stack is '+err.stack);
// }
// finally{
// 	console.log('this will be run always')
// }

//
if(_.isFunction(sum)){
	sum(1,2);
}

console.log('program executing');

var sum = function(a,b){
	return a + b;
}

console.log('program complete');

