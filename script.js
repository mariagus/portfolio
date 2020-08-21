window.onscroll = function () {
  makeSticky();
};

var navBar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navBar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function makeSticky() {
  if (window.pageYOffset >= sticky) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
}

function responsiveNav() {
  var x = document.getElementById("navbar");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

// Get all buttons with class="btn" inside the container
const section = document.getElementsByClassName("section");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < section.length; i++) {
  section[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
