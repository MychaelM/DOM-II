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

// console.log(images);

// const body = document.getElementsByTagName("body");
// console.log(body);
// const container = document.querySelector(".container");
const paragraphs = document.querySelectorAll("p");

window.addEventListener("resize", () => {
  // container.target.style.fontSize = "5rem";
  paragraphs.forEach((e) => {
    e.style.color = "hotpink";
  })
})

window.addEventListener("keydown", () => {
  // container.target.style.fontSize = "5rem";
  paragraphs.forEach((e) => {
    e.style.lineHeight = "3";
  })
})

window.addEventListener("keyup", () => {
  // container.target.style.fontSize = "5rem";
  paragraphs.forEach((e) => {
    e.style.lineHeight = "1.7";
  })
})

const logoHeading = document.querySelector(".logo-heading");

logoHeading.addEventListener("dblclick", () => {
  logoHeading.style.fontSize = "7rem";
})

window.addEventListener("wheel", () => {
  // container.target.style.fontSize = "5rem";
  images.forEach((e) => {
    e.style.opacity = "0.2";
  });
});
window.addEventListener("scroll", () => {
  console.log("I have scrolled the page");
});

window.addEventListener("load", (e) => {
  alert("I have loaded the page.")
});

const button = document.querySelector("input");
button.addEventListener("focus", (e) => {
  e.target.style.backgroundColor = "hotpink";
})
console.log(button);