var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log ("Loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	video = document.querySelector("#player1");
	var volume_percent = video.volume * 100;
	video.play();
	document.querySelector("#volume").innerHTML = volume_percent + "%";
	console.log("Played video");
}); 

document.getElementById("pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
}); 

document.getElementById("slower").addEventListener("click", function() {
    video.playbackRate *= 0.9;
    console.log("New speed is " + video.playbackRate);
}); 

document.getElementById("faster").addEventListener("click", function() {
    video.playbackRate /= 0.9;
    console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video = document.querySelector("#player1");

	if (video.currentTime + 10 >= video.duration) {
		video.currentTime = 0;
		console.log("Going back to the beginning");
	} else {
		video.currentTime += 10;
	}
	console.log("Skipped ahead");
	console.log("Video's current time is " + video.currentTime);
}); // Corrected the logic for skipping and added missing closing parenthesis

document.querySelector("#mute").addEventListener("click", function() {
	video = document.querySelector("#player1");
	
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Video is unmuted");
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Video is muted");
	}
}); 

document.querySelector("#slider").addEventListener("input", function() {
    video = document.querySelector("#player1");
	var volume = document.querySelector("#slider").value;
	var volume_decimal = volume / 100;
	video.volume = volume_decimal;
	document.querySelector("#volume").innerHTML = volume + "%";
	console.log("The volume value is " + volume_decimal);
}); 

document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
}); 

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
}); 
