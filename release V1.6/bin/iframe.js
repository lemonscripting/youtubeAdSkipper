const detected = document.querySelector('ytd-enforcement-message-view-model.style-scope.yt-playability-error-supported-renderers[in-player]');

function detectionCheck() {
    if (detected) {
        console.log("Ad blocker detected");
    } else {
        console.log("All's good");
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

function calcPlayerH(){
    var playerElement = document.getElementById('player');
    var height = playerElement.offsetHeight;
    console.log('Height:', height, 'px');
    return height;
}

function calcPlayerW(){
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
    //iframe.src = patchURL();
    iframe.style.width = calcPlayerW();
    iframe.style.height = calcPlayerH();
    iframe.style.border = 'none';
    iframe.style.zIndex = "99999999999999999999999999999999";
    playerElement.appendChild(iframe);
}

/*
function calcPlayerHW() {
    var playerElement = document.getElementById('player');
    var width = playerElement.offsetWidth;
    var height = playerElement.offsetHeight;
    console.log('Width:', width, 'px');
    console.log('Height:', height, 'px');
}
*/