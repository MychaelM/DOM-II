const images = document.querySelectorAll("img");

images.forEach((event) => {
  event.addEventListener("mouseenter", (e) => {
    e.target.style.transform = "scale(1.5)";
    e.target.style.transition = "transform 1s";
})});
images.forEach((event) => {
  event.addEventListener("mouseleave", (e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.transition = "transform 1s";
})});

console.log(images);