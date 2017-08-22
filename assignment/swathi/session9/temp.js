
function celsiustofahrenheit(temp){

	if (typeof(temp) !== 'number' || isNaN(temp)){
		return("Enter valid temperature in celsius");
	}

	return temp +"\xB0C is "+ (temp * 9 / 5 + 32) +'\xB0F.';
}

function fahrenheittocelsius(ftemp){

	if (typeof(ftemp) !== 'number' || isNaN(ftemp)){
		return("Enter valid temperature in fahrenheit");
	}
	return ftemp +"\xB0F is "+ (ftemp - 32)*9/5 +'\xB0C.'
}
console.log(celsiustofahrenheit(60));
console.log(fahrenheittocelsius(140));
console.log(celsiustofahrenheit("s"));
console.log(celsiustofahrenheit(NaN));
console.log(fahrenheittocelsius(""));

/*camelcase*/
function camelcase(string){
	if (typeof(string) !== 'string' ){
		return("Enter valid string");
	}
	var splited = string.split(' ');
	for (var i = 1, len = splited.length; i < len; i++) {
		splited[i] = splited[i].charAt(0).toUpperCase() + splited[i].slice(1);

	}
	string= splited.join('').replace(',',' ').trim();
	return string;
	
}
console.log(camelcase("test javascipt code"));
