// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyNavbar()};

// Get the navbar
var navbar = document.getElementById("navbar");
var content = document.getElementById("pageContent");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
var height = navbar.offsetHeight;

//for the active highlight
let mainNavLinks = document.querySelectorAll(".topnav a");
let mainSections = document.querySelectorAll(".aboutme .education .skills .professionalexperience");
let lastId;
let cur = [];

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavbar() {
  let fromTop = window.scrollY;
  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
  //console.log("offset " + window.pageYOffset + " offsetTop " + sticky + " height " + height)
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    content.classList.add("moveContentDown");
  } else {
    navbar.classList.remove("sticky");
    content.classList.remove("moveContentDown");
  }
}
