function onload() {
  var browserFrame = document.getElementById("browser");
  if (location.hash === "") {
    browserFrame.src = "IFrame-info.html";
  } else {
    var url = location.hash;
    url = url.substr(1);
    browserFrame.src = url;
  }
}

function setBrowserFrameSourceCheck(key){
  if(key.keyCode === 13){
    key.preventDefault();
    var browserFrame = document.getElementById("browser");
    if(document.getElementById("txtUrl").value === "style.css"){
    } else if (document.getElementById("txtUrl").value === "script.js") {
    } else if (document.getElementById("txtUrl").value === ".git") {
    } else {
      setBrowserFrameSource();
    }
  }
}

function setBrowserFrameSource(){
  var browserFrame = document.getElementById("browser");
  browserFrame.src = document.getElementById("txtUrl").value;
  if (document.getElementById("txtUrl").value === "") {
    browserFrame.src = "blank.html";
  }
}

function setBrowserFrameSourceToBookmark1(){
  var browserFrame = document.getElementById("browser");
  browserFrame.src = "https://www.bing.com//";
}

function setBrowserFrameSourceToBookmark2(){
  var browserFrame = document.getElementById("browser");
  browserFrame.src = "http://birrell.org/andrew/minesweeper/";
}

function setBrowserFrameSourceToBookmark3(){
  var browserFrame = document.getElementById("browser");
  browserFrame.src = "https://ytmp3.cc";
}

function setBrowserFrameSourceToBookmark4(){
  var browserFrame = document.getElementById("browser");
  browserFrame.src = "http://coreball.sinaapp.com/";
}

function setBrowserFrameSourceToBookmark5(){
  var browserFrame = document.getElementById("browser");
  browserFrame.src = "https://www.nationalgeographic.com/projects/magazines/pdf/specialprojects-yourshot-puzzle/dist/jigsaw-puzzle.html#";
}

function setBrowserFrameSourceToBookmark6(){
  var browserFrame = document.getElementById("browser");
  browserFrame.src = "https://skribbl.io/";
}

function setBrowserFrameSourceToBookmark7(){
  var browserFrame = document.getElementById("browser");
  browserFrame.src = "https://theuselessweb.site/Flight%20of%20the%20Hamsters/";
}

function setBrowserFrameSourceToBookmark8(){
  var browserFrame = document.getElementById("browser");
  browserFrame.src = "https://play.cprewritten.net";
}

function setBrowserFrameSourceToBookmark9(){
  var browserFrame = document.getElementById("browser");
  browserFrame.src = "IFrame-info.html";
}

function goBack() {
  window.history.back();
}

function goForward() {
  window.history.forward();
}
