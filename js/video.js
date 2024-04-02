document.addEventListener('DOMContentLoaded', () => {
    var video = document.querySelector("#player1");
    var volumeDisplay = document.getElementById('volumeDisplay'); 

    if (!volumeDisplay) {
        console.error('Volume display element not found. Check the ID is correct and matches the HTML.');
        return; 
    }

    console.log("Good job opening the window");
    video.autoplay = false;
    video.loop = false;
    console.log("Auto play is set to " + video.autoplay);
    console.log("Loop is set to " + video.loop);

    document.querySelector("#play").addEventListener("click", function() {
        console.log("Play Video");
        video.play();
        volumeDisplay.textContent = (video.volume * 100).toFixed(0) + "%";
        console.log("going up to: " + video.volume * 100 + "%");
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

    document.getElementById("skip").addEventListener("click", function() {
        if (video.currentTime + 15 > video.duration) {
            video.currentTime = 0;
            console.log("Going back to the beginning");
        } else {
            video.currentTime += 15;
            console.log("Current location is " + video.currentTime);
        }
    });

    document.getElementById("mute").addEventListener("click", function() {
        if(video.muted) {
            video.muted = false;
            this.textContent = "Mute";
        } else {
            video.muted = true;
            this.textContent = "Unmute";
        }
    });

    document.getElementById("slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        volumeDisplay.textContent = (video.volume * 100).toFixed(0) + "%";
        console.log("Volume: " + (video.volume * 100).toFixed(0) + "%");
    });

    document.getElementById("vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    document.getElementById("orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });
});
