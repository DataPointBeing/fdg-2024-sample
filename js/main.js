window.onscroll = function() {scrollSticky()};

// Get the header
let header = document.getElementById("header");

// Get the offset position of the navbar
let sticky = header.offsetTop;


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollSticky() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    sticky = header.offsetTop;
  }
}
