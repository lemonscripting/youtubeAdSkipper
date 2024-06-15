# youtubeAdSkipper🚀

## Requirements
To run this script, ensure you have either of the following:

- Inspect function available🔍
- Bookmarks bar📚
- Tempermonkey🐒
- Greasemonkey🔧
- Violentmonkey🦹

## Compatibility
This script is compatible with all devices. 💻

## Usage
The scripts check for ads present in the current player and speeds up the player to 16 times speed (maximum playback speed for most devices) to clicks the skip button whenever available🔧

# Instructions

Drag the link below to your bookmarks bar:

[youtubeAdSkipper V1.5](javascript:'use%20strict'%3Bconst%20SPEED%3D100%2CmainVideo%3Ddocument.querySelector(%22video.video-stream.html5-main-video%22)%2CskipButton%3Ddocument.querySelector(%22.ytp-skip-ad-button%22)%3BsetInterval(function()%7Bdocument.querySelector(%22.ytp-ad-player-overlay-layout__ad-info-container%22)%3F(mainVideo.playbackRate%3D16%2CmainVideo.volume%3D0%2Cnull!%3D%3DskipButton%26%26void%200!%3D%3DskipButton%26%26skipButton.click())%3A(mainVideo.playbackRate%3D1%2CmainVideo.volume%3D1%2CmainVideo.style.display%3D%22block%22)%7D%2CSPEED)%3Bvoid+0)


## Disclaimer
This script is for **educational purposes only**. The author does not endorse or encourage any **illegal or unethical activities**. The author is not responsible for any **harm or damage** caused by the use of this script. Use at **your own risk**.

This script should be used only in **controlled environments** and with **appropriate permissions** from the owners of the system or data being manipulated. The user **assumes all responsibility** for any **consequences** that may result from the use of this script. The author cannot be held liable for any **misuse or unethical use** of this script by the user.

By using this script, you agree to **take full responsibility** for your actions and to comply with all **applicable laws and regulations**. If you do not agree with these terms, **do not use this script**.

**Nothing** in this repository constitutes legal advice. The individuals appearing in this presentation, if any, are depicted for **illustrative purposes only** and are presumed innocent until proven guilty in a court of law. 

## Changelog

# V1.0
- initial commit🚀
- added advertisment detection🔍
- added auto skipper⏭️
- added production.min.js📦
- added bookmarklet version🔖

# V1.1
- added message broadcast when ad is blocked📢
- uses vw and vh for dynamic styling📐

# V1.2
- updated stylings📐

# V1.3
- remove adblock alert🚫
- added hide advertisement👀
- added mute advertisement🔇

# V1.4
- updated hooks✅
- fixed ad skip not working🛠️
- added user customisation🎨
- cleaned up code🧹
- added mute when playing ad🔇

# V1.5
- updated hooks✅
- updated logic🛠️

## License
```
BSD 3-Clause License

Copyright (c) 2023, lemonscripting

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```