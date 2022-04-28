var images = document.querySelectorAll("img");
var gallery = document.querySelector(".gallery");
var imageZoom = document.querySelector(".image-zoom img");
var next = document.querySelector(".next");
var previous = document.querySelector(".previous");
var close = document.querySelector(".fa-xmark");
var currentIndex = 0;

images.forEach(function (img, index) {
  img.addEventListener("click", function () {
    currentIndex = index;
    showGallery();
  });
});
function showGallery() {
  if (currentIndex == images.length - 1) {
    next.classList.add("hide");
  } else next.classList.remove("hide");

  if (currentIndex == 0) {
    previous.classList.add("hide");
  } else previous.classList.remove("hide");

  gallery.classList.remove("hide");

  imageZoom.src = images[currentIndex].src;
}
next.addEventListener("click", function () {
  currentIndex != images.length - 1 ? currentIndex++ : undefined;
  showGallery();
});
previous.addEventListener("click", function () {
  currentIndex != 0 ? currentIndex-- : undefined;
  showGallery();
});
close.addEventListener("click", function () {
  gallery.classList.add("hide");
});
