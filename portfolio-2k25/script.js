// function createRain() {
//   const rain = document.querySelector('.rain');

//   for (let i = 0; i < 150; i++) {
//     const drop = document.createElement('div');
//     drop.classList.add('drop');

//     drop.style.left = Math.random() * 100 + "vw";
//     drop.style.animationDuration = 2 + Math.random() * 1.5 + "s";
//     drop.style.animationDelay = Math.random() * 5 + "s";

//     rain.appendChild(drop);
//   }
// }

// createRain();

const img = document.getElementById("toggleImg");

const images = [
  "visuels-p/coffret-artiste/IMG_8740.JPG",
  "visuels-p/coffret-artiste/IMG_8745.JPG",
  "visuels-p/coffret-artiste/IMG_8752.JPG",
  "visuels-p/coffret-artiste/IMG_8756.JPG"
];

let index = 0;

img.addEventListener("click", () => {
  index = (index + 1) % images.length;
  img.src = images[index];
});

