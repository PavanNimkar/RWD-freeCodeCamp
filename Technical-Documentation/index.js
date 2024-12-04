const navLinks = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamgurger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});
