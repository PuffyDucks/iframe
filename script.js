function onload() {
}

function setBrowserFrameSourceCheck(key){
    if(key.keyCode === 13){
        key.preventDefault();

        setBrowserFrameSource();
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
  browserFrame.src = "https://www.bing.com";
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
  browserFrame.src = "IFrame-info.html";
}

function goBack() {
  window.history.back();
}
function goForward() {
  window.history.forward();
}
