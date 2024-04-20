//assets
const mainVideo = document.querySelector('video.video-stream.html5-main-video');
const ad = document.querySelector(".ytp-ad-player-overlay-layout") //document.querySelector('.video-ads.ytp-ad-module');
const skipButton = document.querySelector('.ytp-preview-ad');

function hideAd() {
    mainVideo.playbackRate = 16.0;
    mainVideo.volume = 0.0;
}

function recover() {
    mainVideo.playbackRate = 1.0;
    mainVideo.volume = 1.0;
    mainVideo.style.display = 'block';
}

function skipAd() {
    if (skipButton !== undefined) {
        skipButton.click();
    }
}
//main loop
setInterval(function () {
        if (ad) {
            console.log("ads detected");
            hideAd();
            skipAd();
        } else {
            console.log("no ads detected");
            recover();
        }
}, 1000);