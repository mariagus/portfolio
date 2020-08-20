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
  myFunction();
};

var navbar = document.getElementById("myTopnav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
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
