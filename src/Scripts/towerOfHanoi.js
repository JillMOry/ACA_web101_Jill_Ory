$(document).ready(function() {
	var x;
	$(".piece").click(function() {
		x = $(this).detach(); //used ".piece:last" but that only worked to move the items into the colored bars then it broke.  this points to the element rather than the last  piece.  detach hold the element in memory for use later.
	});

	$(".tower").dblclick(function() {
		$(this).append(x);
	});
});
