// ==UserScript==
// @name         Youtube Auto Ad Skipper
// @namespace    https://github.com/lemonscripting/
// @version      1.5
// @description  Automatically skips all types of ads present on youtube
// @author       lemonscripting
// @match        *://www.youtube.com/*
// @license      BSD 3
// @grant        none
// ==/UserScript==

const SPEED = 100;
const mainVideo = document.querySelector('video.video-stream.html5-main-video');
const skipButton = document.querySelector('.ytp-skip-ad-button');

setInterval(function () {
    if (document.querySelector('.ytp-ad-player-overlay-layout__ad-info-container')) {
        mainVideo.playbackRate = 16.0;
        mainVideo.volume = 0.0;
        if (skipButton !== null && skipButton !== undefined) { // Check if skipButton exists
            skipButton.click();
        }
    } else {
        mainVideo.playbackRate = 1.0;
        mainVideo.volume = 1.0;
        mainVideo.style.display = 'block';
    }
}, SPEED);