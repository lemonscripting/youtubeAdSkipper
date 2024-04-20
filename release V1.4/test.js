const script = document.createElement('script');
script.src = 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app-compat.js';
document.body.appendChild(script);

const script1 = document.createElement('script');
script1.src = 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore-compat.js';
document.body.appendChild(script1);

script1.onload = () => {
  const firebaseConfig = {
//config
  };

  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

  var shopData = [];
  db.collection("s").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      shopData.push(doc.data());
    });
    localStorage.setItem("a", shopData[0]["one"]);
    localStorage.setItem("b", shopData[0]["two"]);
    localStorage.setItem("c", shopData[0]["three"]);


  })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
};

var d_a = localStorage.getItem("a");
var d_b = localStorage.getItem("b");
var d_c = localStorage.getItem("c");

const mainVideo = document.querySelector(d_a);
const ad = document.querySelector(d_b);
const skipButton = document.querySelector(d_c);

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

setInterval(function () {
  if (ad) {
    console.log("ads detected");
    hideAd();
    skipAd();
    if (!ad){
      recover();
    }
  } else {
    console.log("no ads detected");
    recover();
  }
}, 1000);
