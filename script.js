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
    if(document.getElementById("txtUrl").value === "gay"){
      snow("gay", "white")
    } else if (document.getElementById("txtUrl").value === "Snow Halation") {
      snow("Snow Halation", "white")
    } else if (document.getElementById("txtUrl").value === "anime") {
      snow("anime", "white")
    } else if (document.getElementById("txtUrl").value === "google") {
      snow("google", "white")
    } else if (document.getElementById("txtUrl").value === "asdf") {
      snow("asdf", "white")
    } else if (document.getElementById("txtUrl").value === "pee") {
      snow("pee", "yellow")
    } else if (document.getElementById("txtUrl").value === "snow") {
      snow("snow", "white")
    } else if (document.getElementById("txtUrl").value === "egg") {
      snow("egg", "white")
    } else {
      setBrowserFrameSource();
    }
  }
}

function snow(letter, color) {
  (function() {
  var container = document.createElement('div');
  document.body.appendChild(container);
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.overflow = 'hidden';
  container.style.pointerEvents = 'none';

  function init() {
      var injection = document.createElement('style');
      document.body.appendChild(injection);
      injection.innerHTML = '@-webkit-keyframes snow {\nfrom {top:-1%;}\nto{top:121%;}}\n@-moz-keyframes snow {\nfrom {top: -1%;}\nto {top: 121%;}\n}';
  }
  init();
  window.setInterval(createParticle, 200);
  timeChoices = [5, 6, 7, 8, 9, 10];

  function destroy(evt) {
      container.removeChild(evt.target);
  }

  function createParticle() {
      var particle = document.createElement('span');
      var randomSpeed = timeChoices[Math.floor(Math.random() * timeChoices.length)];
      particle.innerHTML = letter;
      particle.className = 'flake';
      particle.style.position = 'absolute';
      particle.style.color = color;
      particle.style.backgroundColor = 'transparent';
      particle.style.width = '5px';
      particle.style.height = '5px';
      particle.style.pointerEvents = 'none';
      particle.style.right = Math.random() * 100 + '%';
      particle.style.borderRadius = '50%';
      particle.style.WebkitAnimation = 'snow ' + randomSpeed + 's linear';
      particle.style.MozAnimation = 'snow ' + randomSpeed + 's linear';
      container.appendChild(particle);
      particle.addEventListener('webkitAnimationEnd', destroy);
      particle.addEventListener('AnimationEnd', destroy);
    }
  })()
}

function setBrowserFrameSource(){
  var browserFrame = document.getElementById("browser");
  browserFrame.src = document.getElementById("txtUrl").value;
  if (document.getElementById("txtUrl").value === "") {
    browserFrame.src = "blank.html";
  }
}

function setBrowserFrameSourceToBookmark1(){
  (function(){var d=document,s=d.createElement('script');if(d.getElementById('canvas_snow')){return;}s.src='http://www.wilmslowastro.com/html5/snow/snowfall.js';d.body.appendChild(s);})();
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
