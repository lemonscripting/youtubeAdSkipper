// ==UserScript==
// @name         Youtube Auto Ad Skipper
// @namespace    https://github.com/lemonscripting/
// @version      1.2
// @description  Automatically skips all types of ads present on youtube
// @author       lemonscripting
// @match        *://www.youtube.com/*
// @license      BSD 3
// @grant        none
// ==/UserScript==

const noticeBox = document.createElement("div");
noticeBox.id = "noticeBox";
noticeBox.textContent = "@lemonscripting youtubeAdSkipper blocked an AD!";
document.body.appendChild(noticeBox);
noticeBox.style.position = "fixed";
noticeBox.style.top = "0";
noticeBox.style.right = "0";
noticeBox.style.background = "black";
noticeBox.style.color = "white";
noticeBox.style.padding = "5vw";
noticeBox.style.fontSize = "3.5vw"
noticeBox.style.textAlign = "center";
noticeBox.style.opacity = "0";
noticeBox.style.transition = "opacity 1.5s, transform 1.5s";
noticeBox.style.transform = "translateY(-100%)";
noticeBox.style.zIndex = "99999999999999999999999";

function broadcast() {
    setTimeout(() => {
        noticeBox.style.opacity = "1";
        noticeBox.style.transform = "translateY(0)";
    }, 100);
    setTimeout(() => {
        noticeBox.style.opacity = "0";
        noticeBox.style.transform = "translateY(-100%)";
    }, 1600);
}

setInterval(function () {
    if (document.querySelector(".ytp-ad-player-overlay")) {
        const video = document.querySelector('video[tabindex="-1"][class="video-stream html5-main-video"][controlslist="nodownload"]');
        if (video) {
            video.playbackRate = 16.0;
        }
        const skipButton = document.querySelector(".ytp-ad-skip-button-modern.ytp-button");
        if (skipButton !== undefined) {
            skipButton.click();
        }
        broadcast();
    } else {
        const video = document.querySelector('video[tabindex="-1"][class="video-stream html5-main-video"][controlslist="nodownload"]');
        if (video) {
            video.playbackRate = 1.0;
        }
    }
}, 10);
