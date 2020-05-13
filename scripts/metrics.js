
var gravity =  0.38
var milesonmars =  0.5

	var gravityconverter = function(weight){
		if (isNaN(weight)) {
			return alert("Your weight must be a number!"); 
		} else {
		var result =  weight * gravity + " N";
		return result;
	}
	}

var target = document.querySelector("#gravityconverter");
target.innerHTML = gravityconverter(50);

	function marsmiles(kilometers){
		if (isNaN(kilometers)) {
			return alert("Kilometers have to be in numbers!"); 
		} else {
		var result =  kilometers / milesonmars + " km";
		return result;
	}
	}

var target = document.querySelector("#marsmiles");
target.innerHTML = marsmiles(50);

