const mainVideo = document.querySelector('video.video-stream.html5-main-video');
const ad = document.querySelector(".video-ads")
const skipButton = document.querySelector('.ytp-skip-ad-button');
let adPresent = false; // Define adPresent variable

const SPEED = 10;

function hideAd() {
    mainVideo.playbackRate = 16.0;
    mainVideo.volume = 0.0;
}

function recover() {
    mainVideo.playbackRate = 1.0;
    mainVideo.volume = 1.0;
    mainVideo.style.display = 'block';
    adPresent = false;
}

function skipAd() {
    if (skipButton !== null && skipButton !== undefined) { // Check if skipButton exists
        skipButton.click();
    }
}

setInterval(function () {

    if (ad) {
        var displayStyle = window.getComputedStyle(ad).getPropertyValue('display');
        if (displayStyle === 'none') {
            adPresent = false;
        } else {
            adPresent = true;
        }
    } else {
        adPresent = false;
    }

    if (adPresent) {
        hideAd();
        skipAd();
    } else {
        recover();
    }
}, SPEED);
