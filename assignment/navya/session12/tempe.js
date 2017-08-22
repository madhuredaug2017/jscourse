function fahrenheit(temp){

	if (typeof(temp) !== 'number' || isNaN(temp)){
		return("Enter valid temperature in celsius");
	}
	return temp +"C is "+ (temp * 180 / 100 + 32) +'F.';
}

function celsius(ftemp)
{

	if (typeof(ftemp) !== 'number' || isNaN(ftemp)){
		return("Enter valid temperature in fahrenheit");
	}
	return ftemp +"F is "+ (ftemp - 32)*180/100 +'C.'
}
console.log(fahrenheit(90));
console.log(celsius(200));