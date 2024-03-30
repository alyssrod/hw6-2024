var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.getElementById("player1");
    video.autoplay = false;
    video.loop = false;

    document.querySelector("#play").addEventListener("click", function() {
        console.log("Play Video");
        video.play();
        document.getElementById("volume").innerText = video.volume * 100 + "%";
    });

    document.querySelector("#pause").addEventListener("click", function() {
        console.log("Pause Video");
        video.pause();
    });

    document.querySelector("#slower").addEventListener("click", function() {
        video.playbackRate *= 0.9;
        console.log("New speed is " + video.playbackRate);
    });

    document.querySelector("#faster").addEventListener("click", function() {
        video.playbackRate /= 0.9;
        console.log("New speed is " + video.playbackRate);
    });

    document.querySelector("#skip").addEventListener("click", function() {
        if (video.currentTime + 10 > video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime += 10;
        }
        console.log("Current location is " + video.currentTime);
    });


    document.querySelector("#mute").addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            this.innerText = "Mute";
        } else {
            video.muted = true;
            this.innerText = "Unmute";
        }
    });

    document.querySelector("#slider").addEventListener("change", function() {
        video.volume = this.value / 100;
        document.getElementById("volume").innerText = this.value + "%";
        console.log("Volume is " + this.value + "%");
    });

    document.querySelector("#vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    document.querySelector("#orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });
});
