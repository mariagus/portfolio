const section = document.getElementsByClassName("section");
const navBar = document.getElementById("navbar");

function scrollWhenClicked() {
  document.querySelector("#projects").scrollIntoView();
}
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav").style.top = "0";
  }
  prevScrollpos = currentScrollPos;
};

function responsiveNav() {
  if (navBar.className === "nav") {
    navBar.className += " responsive";
  } else {
    navBar.className = "nav";
  }
}

for (let i = 0; i < section.length; i++) {
  section[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    navBar.className = "nav";
  });
}
