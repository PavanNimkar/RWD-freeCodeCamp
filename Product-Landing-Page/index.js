const hamburger = document.querySelector("#hamburger");
const hamburgerNav = document.querySelector(".hamburger-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  hamburgerNav.classList.toggle("active");
});
