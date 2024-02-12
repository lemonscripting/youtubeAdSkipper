// ==UserScript==
// @name         Youtube Auto Ad Skipper
// @namespace    https://github.com/lemonscripting/
// @version      1.3
// @description  Automatically skips all types of ads present on youtube
// @author       lemonscripting
// @match        *://www.youtube.com/*
// @license      BSD 3
// @grant        none
// ==/UserScript==

setInterval(function () {

    const ytSurvey = document.querySelector(".ytp-ad-text.ytp-ad-skip-button-text-centered.ytp-ad-skip-button-text");
    if (ytSurvey !== undefined) {
        ytSurvey.click();
    }

    if (document.querySelector(".ytp-ad-player-overlay")) {
        const video = document.querySelector('video[tabindex="-1"][class="video-stream html5-main-video"][controlslist="nodownload"]');
        if (video) {
            video.playbackRate = 16.0;
            video.volume = 0.0;
            video.style.display = 'none';
        }
        const skipButton = document.querySelector(".ytp-ad-skip-button-modern.ytp-button");
        if (skipButton !== undefined) {
            skipButton.click();
        }
    } else {
        const video = document.querySelector('video[tabindex="-1"][class="video-stream html5-main-video"][controlslist="nodownload"]');
        if (video) {
            video.playbackRate = 1.0;
            video.volume = 1.0;
            video.style.display = 'block';
        }
    }

}, 10);