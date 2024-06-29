
var ban = document.querySelector('yt-attributed-string.style-scope.ytd-enforcement-message-view-model .yt-core-attributed-string.yt-core-attributed-string--white-space-pre-wrap span');

if (ban && ban.innerText === "Ad blockers violate YouTube's Terms of Service") {
    console.log("Element exists and contains the specified text.");
} else {
    console.log("Element does not exist or does not contain the specified text.");
}



var element = document.querySelector('ytd-enforcement-message-view-model.style-scope.yt-playability-error-supported-renderers[in-player]');

if (element) {
    console.log("Element exists.");
    element.remove();

} else {
    console.log("Element does not exist.");
}

//<div id="container" class="style-scope yt-playability-error-supported-renderers"></div>
//div id="container" class="style-scope ytd-player"

var container = document.querySelector('div#container.style-scope.yt-playability-error-supported-renderers');

// Check if the container element is found
if (container) {
    // Replace the class attribute with "style-scope ytd-player"
    container.setAttribute('class', 'style-scope ytd-player');
}


//remove the original video player
//append a new iframe


// Select the element
var playerElement = document.querySelector('#player.style-scope.ytd-watch-flexy');

if (playerElement) {
    // Create the iframe element
    var iframe = document.createElement('iframe');
    iframe.src = "https://example.com";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.position = "absolute";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.zIndex = "9999"; // Ensures the iframe is on top

    // Create a wrapper to hold the iframe and set it to cover the player element
    var wrapper = document.createElement('div');
    wrapper.style.position = "relative";
    wrapper.style.width = "100%";
    wrapper.style.height = "100%";

    // Set the player element to have a relative position to correctly position the iframe
    playerElement.style.position = "relative";

    // Append the iframe to the wrapper
    wrapper.appendChild(iframe);

    // Append the wrapper to the player element
    playerElement.appendChild(wrapper);

    console.log("Iframe appended successfully.");
} else {
    console.log("Element does not exist.");
}

var current = window.location.href;
var base = "https://www.youtube-nocookie.com/embed/"
var startPos = url.indexOf("?v=") + 3;
var videoId = url.substring(startPos, startPos + 11);
var patched = base + videoId;
console.log(patched);
