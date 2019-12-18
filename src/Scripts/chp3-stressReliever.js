var i = 0;
$("button").click(function() {
	$(this).html(i++); //the i++ is equal to i+1
	if (i > 5) {
		$("#blu").css(size2); //only 'if' statement is used rather than if else.  the else is used if 'if' is not true or the condition is not met
	}
	if (i > 10) {
		$("#blu").css(size3);
	}
	if (i > 15) {
		$("#blu").css(size4);
	}
	if (i > 20) {
		$("#blu").css(size5);
		$("#grn").css(size2);
	}
	if (i > 25) {
		$("#blui").css(size6);
		$("#grn").css(size3);
	}
	if (i > 28) {
		$("#blu").css(size7);
		$("#grn").css(size4);
	}

	if (i == 31) {
		$("#blu").css(size8);
		$("#grn").css(size5);
		var audio = new Audio("../videos/245646__unfa__cartoon-pop-distorted.mp3");
		audio.play();
	}
	if (i > 36) {
		$("#grn").css(size6);
		$("#red").css(size2);
	}
	if (i > 41) {
		$("#grn").css(size7);
		$("#red").css(size3);
	}
	if (i == 46) {
		$("#grn").css(size8);
		$("#red").css(size4);
		$("#orng").css(size2);
		var audio = new Audio("../videos/245646__unfa__cartoon-pop-distorted.mp3");
		audio.play();
	}
	if (i > 50) {
		$("#red").css(size5);
		$("#orng").css(size3);
	}

	if (i > 55) {
		$("#red").css(size6);
		$("#orng").css(size4);
		$("#purp").css(size3);
	}

	if (i > 59) {
		$("#red").css(size7);
		$("#orng").css(size5);
		$("#purp").css(size4);
		$("#rd").css(size3);
	}

	if (i == 63) {
		$("#red").css(size8);
		$("#orng").css(size6);
		$("#purp").css(size5);
		$("#rd").css(size5);
		var audio = new Audio("../videos/245646__unfa__cartoon-pop-distorted.mp3");
		audio.play();
	}

	if (i == 69) {
		$("#orng").css(size8);
		$("#purp").css(size6);
		$("#rd").css(size7);
		var audio = new Audio("../videos/245646__unfa__cartoon-pop-distorted.mp3");
		audio.play();
	}

	if (i == 72) {
		$("#purp").css(size8);
		var audio = new Audio("../videos/245646__unfa__cartoon-pop-distorted.mp3");
		audio.play();
	}
	if (i == 75) {
		$("#rd").css(size8);

		var audio = new Audio("../videos/245646__unfa__cartoon-pop-distorted.mp3");
		audio.play();
	}
	if (i == 76) {
		location.reload(); //reloads the page.  If this is put under the i==75 the "pop" sound is cut off.
	}
	// }
	// var audio = document.createElement("audio");
	// audio.src = "../videos/245646__unfa__cartoon-pop-distorted.mp3";
	// audio.play();
	//both sections of audio code work.  Leaving both since it was difficult to figure out the code to get it to play
});

console.log(i);
var size2 = { width: "150px", height: "200px" };
var size3 = { width: "200px", height: "275px" };
var size4 = { width: "250px", height: "325px" };
var size5 = { width: "300px", height: "375px" };
var size6 = { width: "350px", height: "425px" };
var size8 = { display: "none" };
var size7 = { width: "375px", height: "450px" };

// var myAudio = new Audio("../videos/245646__unfa__cartoon-pop-distorted.mp3");
