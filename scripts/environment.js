var environment = {
	gravity: "9.80665 m/s2",
	distance: "1500 km",
	atmosphere: "1.322 × 10−11 Pa"
};

var target = document.querySelector("#gravity");
target.innerHTML = environment.gravity;

var target = document.querySelector("#distance");
target.innerHTML = environment.distance;

var target = document.querySelector("#atmosphere");
target.innerHTML = environment.atmosphere;