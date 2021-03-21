
let intro= document.querySelector(".intro");
let viewportHeight = window.innerHeight;
//let vh = viewportHeight * 0.01;
let viewportWidth = window.innerWidth;

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);



const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');


var buttonShare = document.querySelector(".button__share");
var socialBox = document.querySelector(".socialBox");

init();

window.addEventListener('resize', function(){
  console.log("resize")
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


function init(){

  window.onbeforeunload = function () {
    window.scrollTo(0,0);
  };

  addAnimations();

}

function browserTest(){
  var ua = navigator.userAgent.toLowerCase(); 
  if (ua.indexOf('safari') != -1) { 
    if (ua.indexOf('chrome') > -1) {
      isSafari=false;
    } else {
      isSafari=true;
    }
  }
  console.log("is safari "+isSafari)
}

function resizeSite(){
  viewportHeight = window.innerHeight;
  slideHeight = window.innerHeight*1.1;

  vh = viewportHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function isMobile(){
  return (window.matchMedia("(max-width: 600px)").matches == true);
}

function addAnimations(){
  let intro= document.querySelector(".intro");
  let rectInto =intro.getBoundingClientRect();
  let headline=document.querySelector(".titreBox");
  

  window.addEventListener("scroll", () => {
    //console.log(rectInto.top);
    let scrollY = window.scrollY;
    //document.documentElement.style.setProperty('--scrollY', scrollY);

    let stopFillModeItems=document.querySelectorAll(".stopFillMode");
    stopFillModeItems.forEach(element => {
      element.style.animationFillMode = "none";
    });

    if (scrollY>viewportHeight*0.2) {
      stopFillModeItems.forEach(element => {
        //element.style.transform="translate(-100vh)";
      });
    }
  });

}

function addTextAnimation(boxId,precentage,text){
}





function startVideo(video) {
  if (video) {
    console.log("video play")
    video.play
  }
}
function pauseVideo(video) {
  if (video) {
    video.pause
  }
}

function initButtonShares() {
  buttonShare.addEventListener("click", function(){
    socialBox.classList.toggle("open");   
    buttonShare.classList.toggle("open");
    if (buttonShare.classList.contains("open")) {
      buttonShare.innerHTML="X";
    }else{
      buttonShare.innerHTML="Partagez"
    }
    
  })
}
