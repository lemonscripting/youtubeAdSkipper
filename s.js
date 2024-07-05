//get assets
var current = window.location.href;
var base = "https://www.youtube-nocookie.com/embed/"
var startPos = current.indexOf("?v=") + 3;
var videoId = current.substring(startPos, startPos + 11);
var patched = base + videoId;
console.log(patched);

//clear current page
var body = document.body;
while (body.firstChild) {
    body.removeChild(body.firstChild);
}

//inject video player
// Create the header element
var header = document.createElement('header');
header.classList.add('header');
header.innerHTML = `
  <h1>Video Player</h1>
  <input type="text" class="search-bar" placeholder="Search...">
`;

var searchInput = header.querySelector('.search-bar');
searchInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    var searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
      var searchUrl = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(searchTerm);
      window.location.href = searchUrl;
    }
  }
});

// Create the main content element
var mainContent = document.createElement('main');
mainContent.classList.add('main-content');
mainContent.innerHTML = `
  <div class="video-player">
    <iframe src="${patched}" frameborder="0" allowfullscreen></iframe>
  </div>
`;

// Create the footer element
var footer = document.createElement('footer');
footer.classList.add('footer');
footer.innerHTML = `
  <p>&copy; 2024 lemonscripting. All rights reserved.</p>
`;

// Append elements to document.body
document.body.appendChild(header);
document.body.appendChild(mainContent);
document.body.appendChild(footer);

// Create and append the style element for CSS
var styleElement = document.createElement('style');
styleElement.textContent = `
/* Reset default margin and padding */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Basic styling for the body */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
}

/* Header styling */
.header {
  background-color: #333;
  color: #fff;
  padding: 2rem; /* Increased padding for header */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  font-size: 2rem; /* Increased font size for header title */
}

.search-bar {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 250px; /* Adjust width as needed */
}

.search-bar:focus {
  outline: none;
  border-color: #007bff;
}

/* Main content styling */
.main-content {
  max-width: 1000px; /* Increase max-width for wider content */
  margin: 20px auto;
  padding: 0 20px;
}

.video-player {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* Aspect ratio 16:9 */
  max-width: 100%; /* Ensure the video player does not exceed its container */
}

.video-player iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

/* Footer styling */
.footer {
  text-align: center;
  padding: 2rem; /* Increased padding for footer */
  background-color: #333;
  color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
}
`;

// Append the style element to the document head
document.head.appendChild(styleElement);

//extra
if (window.location.href.indexOf('watch?v=') !== -1) {
  console.log('in a video');
} else {
  console.log('The URL does not contain "watch?v="');
}