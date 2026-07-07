const carousel = document.querySelector(".carousel-track");
const next_button = document.querySelector(".carousel-next");
const prev_button = document.querySelector(".carousel-prev");

next_button?.addEventListener("click", () => {
  carousel?.scrollBy({ left: carousel.clientWidth, behavior: "smooth" });
});
prev_button?.addEventListener("click", () => {
  carousel?.scrollBy({ left: -carousel.clientWidth, behavior: "smooth" });
});

