//assets
const mainVideo = document.querySelector('video.video-stream.html5-main-video');
const ad = document.querySelector(".video-ads")
const skipButton = document.querySelector('.ytp-skip-ad-button');

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
    if (skipButton !== undefined) {
        skipButton.click();
    }
}
//main loop
setInterval(function () {
    if (ad) {
        var displayStyle = window.getComputedStyle(ad).getPropertyValue('display');
        if (displayStyle === 'none') {
            adPresent = false;
            console.log('The div with class "video-ads" is set to display: none.');
        } else {
            adPresent = true;
            console.log('The div with class "video-ads" is not set to display: none.');
        }
    } else {
        console.log('The div with class "video-ads" does not exist.');
        adPresent = false;
    }

    if (adPresent == true) {
        console.log("ads detected");
        hideAd();
        skipAd();
    }
    if (adPresent != true) {
        console.log("no ads detected");
        recover();
    }
}, SPEED);