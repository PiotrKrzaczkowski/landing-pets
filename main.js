const menuIcon = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".nav-list");

menuIcon.addEventListener("click", () => {
  navList.classList.toggle("show");
});
