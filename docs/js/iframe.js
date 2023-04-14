const bookmarks = [
  "https://www.bing.com/",
  "https://diep.io/",
  "https://skribbl.io/",
  "https://slither.io",
  "https://secret.ethanl.ee/",
  "https://www.blankmediagames.com",
  "info.html"
]

function onload() {
  // Loads page from hash, or info page if none
  let iframe = document.getElementById("iframe");
  if (location.hash === "") {
    iframe.src = "info.html";
  } else {
    iframe.src = location.hash.substring(1);
  }
}

// Checks if enter key is pressed on text field
function checkKeypress(key) {
  if(key.keyCode === 13){
    key.preventDefault();
    setIFrameSource();
  }
}

function setIFrameSource(){
  if (document.getElementById("urlbox").value === "") {
    document.getElementById("iframe").src = "blank.html";
  } else {
    document.getElementById("iframe").src = document.getElementById("urlbox").value;
  }
}

function setIFrameSourceToBookmark(index){
  document.getElementById("iframe").src = bookmarks[index];
}
