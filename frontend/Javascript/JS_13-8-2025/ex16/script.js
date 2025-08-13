// Make a simple image gallery in HTML + JavaScript where clicking "Next" shows the next image in an array of images, and clicking "Prev" shows the previous one.

let images = [
  "1.jpeg",
  "2.jpeg", 
  "3.jpeg",
  "4.jpeg"
];

let index = 0;

let imgallery = document.getElementById("gallery");

imgallery.src = images[index];

function nextImage() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  imgallery.src = images[index];
}

function prevImage() {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  imgallery.src = images[index];
}
