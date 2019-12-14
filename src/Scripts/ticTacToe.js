let gameMarker = "X"; //gameMarker orginates as an X
var id = 1; //the variable is "1" and will be placed into the 1st square

function changeMarkerToX() {
	gameMarker = "X";
	console.log("button x was clicked");
}

function changeMarkerToO() {
	gameMarker = "O";
	console.log("button o was clicked");
}

function placeMark() {
	var square = document.getElementById(id); //points to where the action is o take place
	square.innerHTML = gameMarker; // is where the text should be placed and what should be placed.  In this instance it is the X or O dependent on which is being called
	id += 1; //after first placement a +1 will be added to the left or prior operand.  This results in a mark in the 2nd box.  If the value was set at +=2 the second mark would be in the 3rd box, then 5th box and so on.
	console.log(gameMarker);
}
