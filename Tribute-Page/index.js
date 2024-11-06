let hamburger = document.querySelector(".hamburger");
let linkContainer = document.querySelector(".link-container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  linkContainer.classList.toggle("active");
});
