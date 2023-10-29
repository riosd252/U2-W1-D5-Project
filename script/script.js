const navBar = document.querySelector(".nav-bar");
const navBtn = document.querySelector(".nav-btn");
const main = document.querySelector("main");

document.addEventListener("scroll", (e) => {
  console.log(e);
  navBar.classList.add("scrolled-bar");
  navBtn.classList.add("scrolled-btn");
});
