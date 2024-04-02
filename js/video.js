    var video;

    window.addEventListener("load", function(){ 
        console.log("zgood job opening the window"); 
        video = document.querySelector("#player1"); 
        video.autoplay = false;
        video.loop = false;
        console.log("Auto play is set to " + video.autoplay)
        console.log("loop is set to "+ video.loop)
        volumeDisplay.textContent = (video.volume * 100).toFixed(0) + "%";
    }); 
    

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
        if (video.currentTime + 10 >= video.duration) {
            video.currentTime = 0;
            console.log("Going back to the beginning");
        } else {
            video.currentTime += 10;
        }
        console.log("Current location is " + video.currentTime);
    });

    document.getElementById("mute").addEventListener("click", function() {
        video.muted = !video.muted;
        this.textContent = video.muted ? "Unmute" : "Mute";
    });

    document.getElementById("slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        volumeDisplay.textContent = (video.volume * 100).toFixed(0) + "%"; 
        updateVolumeDisplay();
    });

    document.getElementById("vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    document.getElementById("orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });

    updateVolumeDisplay();
});
