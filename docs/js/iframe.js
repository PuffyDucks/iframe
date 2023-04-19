const bookmarks = [
  "https://www.bing.com/",
  "https://diep.io/",
  "https://skribbl.io/",
  "https://slither.io",
  "https://secret.ethanl.ee/",
  "https://www.blankmediagames.com",
  "home.html"
]

function onload() {
  // Loads page from hash, or info page if none
  let iframe = document.getElementById("iframe");
  if (location.hash === "" || location.hash === "#home") {
    iframe.src = "home.html";
  } else if (location.hash === "#error") {
    iframe.src = "error.html";
  } else {
    iframe.src = location.hash.substring(1);
  }
  
  iframe.onload = function() {
    if (iframe.src === "https://puffyducks.github.io/iframe/home.html") {
      location.hash = "home";
    } else if (iframe.src === "https://puffyducks.github.io/iframe/error.html") {
      location.hash = "error";
    } else {
      location.hash = iframe.src;
    }
  } 
}

// Checks if enter key is pressed on text field
function checkKeypress(key) {
  if(key.keyCode === 13){
    key.preventDefault();
    setIFrameSource();
  }
}

function setIFrameSource() {
  if (document.getElementById("urlbox").value === "") {
    document.getElementById("iframe").src = "home.html";
  } else {
    document.getElementById("iframe").src = document.getElementById("urlbox").value;
  }
}

function setIFrameSourceToBookmark(index){
  document.getElementById("iframe").src = bookmarks[index];
}
