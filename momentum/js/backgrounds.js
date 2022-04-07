const images = ["ggam1.jpg", "ggam2.jpg", "ggam3.jpg", "ggam4.jpg", "ggam5.jpg"];

const imageIndex = Math.floor(Math.random()*5);

let selectedImageName = images[imageIndex];

const bgImage = document.createElement("img");

bgImage.src = `img/${selectedImageName}`;

document.body.appendChild(bgImage);