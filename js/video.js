var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log('auto play is set to: ' + video.autoplay)
	console.log('loop is set to: ' + video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log('Slow Down');
	video.playbackRate *= 0.90;
	console.log('New speed is ' + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log('Speed Up');
	video.playbackRate /=0.9;
	console.log('New speed is ' + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log('Skip Ahead');
	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0;
	}
	console.log('New time is ' + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		console.log('Mute');
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	} else {
		console.log('Unmute');
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log('The current volume is ' + video.volume);
	if(video.volume != 1) {
		console.log('The percentage of current volume is ' + video.volume * 100 + '%');
		document.querySelector("#volume").innerHTML = 'The percentage of current volume is ' + video.volume * 100 + '%';
	}
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log('Vintage');
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log('Original');
	video.classList.remove("oldSchool");
});