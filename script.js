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
  browserFrame.src = "https://camo.envatousercontent.com/7a70e8ab0bbf84901741e9aa6fead4d671b8cd03/687474703a2f2f6933352e70686f746f6275636b65742e636f6d2f616c62756d732f643138332f4641444544474c4f52593138322f6f75747075745f4f395a59746a5f7a70736f6d30706c6370722e676966";
}

function setBrowserFrameSourceToBookmark7(){
  var browserFrame = document.getElementById("browser");
  browserFrame.src = "IFrame-info.html";
}

function goBack() {
  window.history.back();
}

function goForward() {
  window.history.forward();
}
