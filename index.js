const hamburger_btn = document.querySelector(".hamburger-btn")
const close_btn = document.querySelector(".close-btn")
const header_nav = document.querySelector(".header-nav");

hamburger_btn.addEventListener("click", () => {
  header_nav.classList.add("active")
  close_btn.classList.add("active")
  hamburger_btn.classList.add("opened")
})

close_btn.addEventListener("click", () => {
  header_nav.classList.remove("active")
  close_btn.classList.remove("active")
  hamburger_btn.classList.remove("opened")
})