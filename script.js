function scrollWhenClicked() {
  document.querySelector("#projects").scrollIntoView();
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav").style.top = "0";
  }
  prevScrollpos = currentScrollPos;
};

var navBar = document.getElementById("navbar");

function responsiveNav() {
  if (navBar.className === "nav") {
    navBar.className += " responsive";
  } else {
    navBar.className = "nav";
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
    navBar.className = "nav";
  });
}
