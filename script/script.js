const navBar = document.querySelector(".nav-bar");
const navBtn = document.querySelector(".nav-btn");
const main = document.querySelector("main");

document.addEventListener("scroll", (e) => {
  if (document.documentElement.scrollTop >= 360) {
    navBar.classList.add("scrolled-bar");
    navBtn.classList.add("scrolled-btn");
  } else {
    navBar.classList.remove("scrolled-bar");
    navBtn.classList.remove("scrolled-btn");
  }
});
