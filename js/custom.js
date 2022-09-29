//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  window.scroll({ top: 0, behavior: "smooth" });
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
