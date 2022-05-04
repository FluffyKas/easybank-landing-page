// Mobile menu

const hamburger_btn = document.querySelector(".hamburger-btn");
const header_nav = document.querySelector(".header-nav");

hamburger_btn.addEventListener("click", () => {
  header_nav.classList.toggle("active")
  hamburger_btn.classList.toggle("active")
})

// Observer to reveal content on scroll

const observedElements = document.querySelectorAll(".observed");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("reveal", entry.isIntersecting)
    if (entry.isIntersecting) observer.unobserve(entry.target)
  })
}, {
  threshold: .45
})

observedElements.forEach(element => {
  observer.observe(element);
})
