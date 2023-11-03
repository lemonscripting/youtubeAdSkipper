setInterval(function() {
  if (document.querySelector(".ytp-ad-player-overlay")) {
  console.log("ad detected");
  // Get the video element by class and attributes
const video = document.querySelector('video[tabindex="-1"][class="video-stream html5-main-video"][controlslist="nodownload"]');

if (video) {
  // Set the playback rate to x16 (fastest speed avail)
  video.playbackRate = 16.0;
}
    
const skipButton = document.querySelector(".ytp-ad-skip-button.ytp-button");
if (skipButton !== undefined) {
  skipButton.click();
}


} else {
// Get the video element by class and attributes
const video = document.querySelector('video[tabindex="-1"][class="video-stream html5-main-video"][controlslist="nodownload"]');

if (video) {
  // Set the playback rate back to normal speed
  video.playbackRate = 1.0;
}
}
}, 10);




  

