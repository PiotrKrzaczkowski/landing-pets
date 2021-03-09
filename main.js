// MOBILE MENU OPEN FUNCTION
const menuIcon = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".nav-list");
menuIcon.addEventListener("click", () => {
  navList.classList.toggle("show");
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 10) {
    document.querySelector(".nav").style.backgroundColor =
      "rgba(255, 133, 102)";
  } else document.querySelector(".nav").style.backgroundColor = "transparent";
});

// REVIEWS PEOPLE
const reviewsContainer = document.getElementById("reviews-container");
const reviews = [
  {
    img: "../assets/profil.jpg",
    name: "Kenned Dsouza",
    review:
      '" I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing"',
  },
  {
    img: "../assets/profil.jpg",
    name: "Pjoter Krzaczkowski",
    review: '"rewiev recenzja hej hhej hej"',
  },
  {
    img: "../assets/profil.jpg",
    name: "Brajan Maliszewski",
    review: '" hej hej kawalerowie nie zawracajcie dziewczynom w glowie"',
  },
];

window.addEventListener("DOMContentLoaded", () => {
  reviewsContainer.innerHTML = reviews.map((review) => {
    return `
            <div class="review">
              <img class="review-img" src="${review.img}" alt="profil">
              <h4 class="review-name">${review.name}</h4>
              <p class="review-desc">${review.review}</p>
            </div>
          `;
  });
});
