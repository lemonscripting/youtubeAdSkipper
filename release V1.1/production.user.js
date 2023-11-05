// ==UserScript==
// @name         Youtube Auto Ad Skipper
// @namespace    https://github.com/lemonscripting/
// @version      1.1
// @description  Automatically skips all types of ads present on youtube
// @author       lemonscripting
// @match        *://www.youtube.com/*
// @license      BSD 3
// @grant        none
// ==/UserScript==

const messageBox = document.createElement('div');
messageBox.style.position = 'fixed';
messageBox.style.top = '-5vh';
messageBox.style.right = '5vw';
messageBox.style.width = '28vw';
messageBox.style.height = '5.5vh';
messageBox.style.backgroundColor = 'black';
messageBox.style.color = 'grey';
messageBox.style.padding = '2vw';
messageBox.style.borderRadius = '5%';
messageBox.style.transition = 'top 2s, opacity 2s';
messageBox.style.zIndex = '9999999999999999';
messageBox.style.opacity = '0';
messageBox.style.fontWeight = 'bold';
messageBox.style.fontSize = '2vw';
messageBox.style.textAlign = 'center';
messageBox.innerText = '@lemonscripting AD blocker has just blocked an AD!';
document.body.appendChild(messageBox);

function broadcast() {
    document.body.appendChild(messageBox);
    setTimeout(() => {
        messageBox.style.top = '5vh';
        messageBox.style.opacity = '1';
    }, 100);
    setTimeout(() => {
        messageBox.style.opacity = '0';
        messageBox.style.top = '100vh';
    }, 5000);
}

setInterval(function () {
    if (document.querySelector(".ytp-ad-player-overlay")) {
        const video = document.querySelector('video[tabindex="-1"][class="video-stream html5-main-video"][controlslist="nodownload"]');
        if (video) {
            video.playbackRate = 16.0;
        }
        const skipButton = document.querySelector(".ytp-ad-skip-button.ytp-button");
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