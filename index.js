const nav = document.querySelector("nav");

window.addEventListener("scroll", function() {
  if(window.pageYOffset > 0) {
    nav.classList.add("scrolled");
    nav.style.backgroundColor = "black"; // added this line to change the background color to black
  } else {
    nav.classList.remove("scrolled");
    nav.style.backgroundColor = "#fff"; // added this line to change the background color back to aquamarine
  }
});
