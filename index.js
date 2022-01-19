const hamburger_btn = document.querySelector(".hamburger-btn")
const header_nav = document.querySelector(".header-nav");

hamburger_btn.addEventListener("click", () => {
  header_nav.classList.toggle("active")
  hamburger_btn.classList.toggle("active")
})