// ==UserScript==
// @name         Youtube Auto Ad Skipper
// @namespace    https://github.com/lemonscripting/
// @version      1.6
// @description  Automatically skips all types of ads present on youtube
// @author       lemonscripting
// @match        *://www.youtube.com/*
// @license      BSD 3
// @grant        none
// ==/UserScript==

const SPEED = 100;
const mainVideo = document.querySelector('video.video-stream.html5-main-video');
const detected = document.querySelector('ytd-enforcement-message-view-model.style-scope.yt-playability-error-supported-renderers[in-player]');
const frontPageBannerAd = document.getElementById('dismissible');
const searchAds = document.querySelectorAll('div#rendering-content.style-scope.ytd-in-feed-ad-layout-renderer');

//start of antiban
function detectionCheck() {
    if (detected) {
        console.log("Ad blocker detected");
        return "yes";
    } else {
        console.log("All's good");
        return "no";
    }
}

function patchURL() {
    var current = window.location.href;
    var base = "https://www.youtube-nocookie.com/embed/"
    var startPos = current.indexOf("?v=") + 3;
    var videoId = current.substring(startPos, startPos + 11);
    var patched = base + videoId;
    console.log(patched);
    return patched;
}

function calcPlayerH() {
    var playerElement = document.getElementById('player');
    var height = playerElement.offsetHeight;
    console.log('Height:', height, 'px');
    return height;
}

function calcPlayerW() {
    var playerElement = document.getElementById('player');
    var width = playerElement.offsetWidth;
    console.log('Width:', width, 'px');
    return width;
}

function patchVideoPlayer() {
    var playerElement = document.getElementById('player');
    while (playerElement.firstChild) {
        playerElement.removeChild(playerElement.firstChild);
    }
    var iframe = document.createElement('iframe');
    iframe.src = patchURL();
    iframe.style.width = calcPlayerW();
    iframe.style.height = calcPlayerH();
    iframe.style.border = 'none';
    iframe.style.zIndex = "99999999999999999999999999999999";
    playerElement.appendChild(iframe);
}
//end of antiban

//main
setInterval(function () {
    //antiban
    if (detectionCheck() == "yes") {
        patchVideoPlayer();
    }

    //search ads
    if (searchAds) {
        searchAds.forEach(function (element) {
            var parent = element.parentNode;
            if (parent) {
                parent.removeChild(element);
            }
        });
    }

    //banner ad
    if (frontPageBannerAd) {
        frontPageBannerAd.parentNode.removeChild(frontPageBannerAd);
        console.log('Banner ad removed');
    } else {
        console.log('Banner ad does not exist');
    }

    //skip ad
    if (document.querySelector('.ytp-ad-player-overlay-layout__ad-info-container')) {
        mainVideo.playbackRate = 16.0;
        mainVideo.volume = 0.0;
        var skipButton = document.querySelector('.ytp-skip-ad-button');
        if (skipButton !== null && skipButton !== undefined) { // Check if skipButton exists
            skipButton.click();
        }
    } else {
        mainVideo.playbackRate = 1.0;
        mainVideo.volume = 1.0;
        mainVideo.style.display = 'block';
    }
}, SPEED);