function scrollWhenClicked() {
  document.querySelector(".projects").scrollIntoView();
}

function scrollAbout() {
  document.querySelector(".about").scrollIntoView();
}

function scrollContact() {
  document.querySelector(".contact").scrollIntoView();
}

function scrollHome() {
  document.querySelector(".home").scrollIntoView();
}

window.onscroll = function () {
  makeSticky();
};

var navbar = document.getElementById("myTopnav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function makeSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// Get the container element
const topNav = document.getElementById("myTopnav");

// Get all buttons with class="btn" inside the container
const section = topNav.getElementsByClassName("section");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < section.length; i++) {
  section[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
