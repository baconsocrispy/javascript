// countdown assignment
function  countdown() {
  var secs = getValue("seconds")
  function tick() {
    secs = secs - 1;
    replaceInner("timer", secs);
    var time = setTimeout(tick, 1000);
    if (secs == -1) {
      alert("Time's Up");
      clearTimeout(time);
      replaceInner("timer", "");
    }
  }
  tick()
}
// helpers 
function  replaceInner(elementId, content) {
  document.getElementById(elementId).innerHTML = content
}
function  getValue(elementId) {
  return  document.getElementById(elementId).value
}

// slideshow
let slideIndex = 1;
showSlides(slideIndex)

// next/prev controls
function  plusSlides(n) {
  showSlides(slideIndex += n);
}

// thumbnail controls
function  currentSlide(n) {
  showSlides(slideIndex = n);
}

function  showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // keeps slideIndex from going outside of slides.length
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  // loops through all slides and resets display to "none"
  for (i = 0; i < slides.length; i++) {  
    slides[i].style.display = "none";
  }

  // loops through dot objects, removing 'active' class
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // sets slide at slideIndex - 1 to "block"
  slides[slideIndex - 1].style.display = "block";

  // sets dot object active class to current slide
  dots[slideIndex - 1].className += " active";
}

