//assets
const dependency1 = document.createElement('script');
dependency1.src = 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app-compat.js';
document.body.appendChild(dependency1);

const dependency2 = document.createElement('script');
dependency2.src = 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore-compat.js';
document.body.appendChild(dependency2);

//update your querySelctor assets
dependency2.onload = () => {
    const firebaseConfig = {
        //add your firebase assets here
    };
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();
    db.collection("shop").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
};

//assets
const mainVideo = document.querySelector('video.video-stream.html5-main-video');
const ad = document.querySelector(".ytp-ad-player-overlay-layout") //document.querySelector('.video-ads.ytp-ad-module');
const skipButton = document.querySelector('.ytp-preview-ad');

function hideAd() {
    mainVideo.playbackRate = 16.0;
    mainVideo.volume = 0.0;
}

function recover() {
    mainVideo.playbackRate = 1.0;
    mainVideo.volume = 1.0;
    mainVideo.style.display = 'block';
}

function skipAd() {
    if (skipButton !== undefined) {
        skipButton.click();
    }
}
//main loop
setInterval(function () {
    if (ad) {
        console.log("ads detected");
        hideAd();
        skipAd();
    } else {
        console.log("no ads detected");
        recover();
    }
}, 1000);