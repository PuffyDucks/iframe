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

function validateURL(address) {
  let url;
  try {
    url = new URL(address);
  } catch (_) {
    return false;
  }
  return (url.protocol === "http:" || url.protocol === "https:");
}

function setIFrameSource() {
  let address = document.getElementById("urlbox").value;
  if (address === "") {
    document.getElementById("iframe").src = "home.html";
  } else if (!validateURL(address)) {
    document.getElementById("iframe").src = "error.html";
  } else {
    document.getElementById("iframe").src = address;
  }
}

function setIFrameSourceToBookmark(index){
  document.getElementById("iframe").src = bookmarks[index];
}
