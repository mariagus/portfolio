// projects button scroll function:

function scrollWhenClicked() {
  window.location.href = "#projects";
  document.querySelector("#projects").scrollIntoView();
}

function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}
// Get the container element
const navbar = document.getElementById("navbar");

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
