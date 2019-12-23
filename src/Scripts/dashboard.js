var x = document.getElementById("geo");

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
}
function showPosition(position) {
	x.innerHTML =
		"Latitude: " +
		position.coords.latitude +
		"<br>Longitude: " +
		position.coords.longitude;
}

function showTime() {
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	var session = "AM";

	if (h == 0) {
		h = 12;
	}
	//if the hour is greater than 12, 12 is subtracted
	if (h > 12) {
		h = h - 12;
		session = "PM";
	}
	h = h < 10 ? "0" + h : h;
	m = m < 10 ? "0" + m : m;
	var time = h + ":" + m + ":" + s + " " + session;
	document.getElementById("DigitalCLOCK").innerText = time;
	document.getElementById("DigitalCLOCK").textContent = time;
	setTimeout(showTime, 1000);
}
showTime();

// below will render an alert re: geolocation
// if (navigator.geolocation) {
// 	navigator.geolocation.getCurrentPosition(handle_success, handle_errors);

// 	function handle_success(position) {
// 		geo(
// 			"Latitude: " +
// 				position.coords.latitude +
// 				"\n Longitude: " +
// 				position.coords.latitude
// 		);
// 	}

// 	function handle_errors(err) {
// 		switch (err.code) {
// 			case err.PERMISSION_DENIED:
// 				alert("User refused to share geolocation data");
// 				break;

// 			case err.POSITION_UNAVAILABLE:
// 				alert("Current position is unavailable");
// 				break;

// 			case err.TIMEOUT:
// 				alert("Timed out");
// 				break;

// 			default:
// 				alert("Unknown error");
// 				break;
// 		}
// 	}
// }
