document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("player1");
    
    function updateVolumeDisplay() {
        var volumeDisplay = document.getElementById("volume");
        volumeDisplay.textContent = Math.round(video.volume * 100) + "%";
    }

    updateVolumeDisplay();

    document.getElementById("play").addEventListener("click", function() {
        console.log("Play Video");
        video.play();
        updateVolumeDisplay();
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
            console.log("Current location is " + video.currentTime);
        }
    });

    document.getElementById("mute").addEventListener("click", function() {
        video.muted = !video.muted;
        this.textContent = video.muted ? "Unmute" : "Mute";
    });

    document.getElementById("slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        updateVolumeDisplay();
    });

    document.getElementById("vintage").addEventListener("click", function() {
        video.className = "oldSchool";
    });

    document.getElementById("orig").addEventListener("click", function() {
        video.className = "";
    });
});
