const headerBtn = document.querySelectorAll(".header-btn");
const activeColor = document.querySelector(".active-color");

function imgSlider(anything) {
  document.querySelector(".starbucks").src = anything;
}

function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
}
function textColor(color) {
  const circle = document.querySelector("span");
  circle.style.color = color;
}
function buttonColor(color) {
  const circle = document.querySelector(".textbox a");
  circle.style.background = color;
}
function listColor(color) {
  const circle = document.querySelector("header ul li a:hover");
  header.style.background = color;
}

//!  CHANGE BUTOTN COLOR WHEN THEME IS CHANGED

let currentColor;

headerBtn.forEach(function (e) {
  e.addEventListener("mouseover", function () {
    currentColor = activeColor.style.background;
    e.style.background = `${currentColor}`;
  });
});

headerBtn.forEach(function (e) {
  e.addEventListener("mouseout", function () {
    e.style.background = "transparent";
  });
});
