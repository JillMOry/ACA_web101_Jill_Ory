$(document).ready(function() {
	var x;
	$(".piece").click(function() {
		x = $(".piece:last").detach();
	});

	$(".tower").dblclick(function() {
		$(this).append(x);
	});
});
