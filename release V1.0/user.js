// ==UserScript==
// @name         Youtube Auto Ad Skipper
// @namespace    https://github.com/lemonscripting/
// @version      1.0
// @description  Automatically skips all types of ads present on youtube
// @author       lemonscripting
// @match        *://www.youtube.com/*
// @license      BSD 3
// @grant        none
// ==/UserScript==

setInterval(function () {
    //check if ads exists on that page
    if (document.querySelector(".ytp-ad-player-overlay")) {

        // Get the video element by class and attributes
        const video = document.querySelector('video[tabindex="-1"][class="video-stream html5-main-video"][controlslist="nodownload"]');

        if (video) {
            // Set the playback rate to x16 (fastest speed available)
            video.playbackRate = 16.0;
        }
        //if skip button is available click it once it passes the 5 second mark
        const skipButton = document.querySelector(".ytp-ad-skip-button.ytp-button");
        if (skipButton !== undefined) {
            skipButton.click();
        }

    } else {
        //after the ad has ended
        const video = document.querySelector('video[tabindex="-1"][class="video-stream html5-main-video"][controlslist="nodownload"]');

        //reset the playback speed to normal
        if (video) {
            // Set the playback rate back to normal speed
            video.playbackRate = 1.0;
        }
    }
}, 10);






