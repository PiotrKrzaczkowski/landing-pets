// MOBILE MENU OPEN FUNCTION
const menuIcon = document.querySelector(".hamburger-menu ");
const navList = document.querySelector(".nav-list");
const nav = document.querySelector(".nav");
const lines = document.querySelectorAll(".line");

menuIcon.addEventListener("click", () => {
  navList.classList.toggle("show");
  lines.forEach((line) => line.classList.toggle("change"));
});

// CHANGE BACKGROUND-COLOR MOBILE MENU
window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 10) {
    document.querySelector(".nav").style.backgroundColor =
      "rgba(255, 255, 255,.8)";
    lines.forEach((line) => (line.style.backgroundColor = "#333"));
  } else {
    lines.forEach((line) => (line.style.backgroundColor = "#DDD"));
    document.querySelector(".nav").style.backgroundColor = "transparent";
  }
});

// REVIEWS PEOPLE
const reviewsContainer = document.getElementById("reviews-container");
const reviews = [
  {
    id: 1,
    img: "../assets/profil.jpg",
    name: "Kenned Dsouza",
    review:
      '" I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing"',
  },
  {
    id: 2,
    img: "../assets/profil.jpg",
    name: "Pjoter Krzaczkowski",
    review: '"rewiev recenzja hej hhej hej"',
  },
  {
    id: 3,
    img: "../assets/profil.jpg",
    name: "Brajan Maliszewski",
    review: '" hej hej kawalerowie nie zawracajcie dziewczynom w glowie"',
  },
];
const sliderBtns = [...document.querySelectorAll(".slider-btn")];
let reviewIndex = 1;

sliderBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (e.target.name === "next") reviewIndex++;
    if (e.target.name === "prev") reviewIndex--;

    if (reviewIndex === reviews.length) reviewIndex = 0;
    else if (reviewIndex < 0) reviewIndex = reviews.length - 1;

    reviewsContainer.innerHTML = `
            <div class="review">
              <img class="review-img" src="${reviews[reviewIndex].img}" alt="profil">
              <h4 class="review-name">${reviews[reviewIndex].name}</h4>
              <p class="review-desc">${reviews[reviewIndex].review}</p>
            </div>
        `;
  })
);
