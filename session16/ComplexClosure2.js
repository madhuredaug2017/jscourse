

function sum(a){
	var total = a;//1`
	var middle = function(b){
		if(b){
			total +=b;
		}
		return middle;
	}

	middle.toString = function(){
		return total;
	}

    return middle;
}

//sum(1,2,3);//
//interviews it will be asked 

console.log(sum(1)(2)(3)(4)(2));
//sum(1,2,3,4,2)
//vs 
//sum(1)(2)(3)(4)(2)

