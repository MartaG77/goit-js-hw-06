function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const backgroundColor = document.querySelector("body");
const text = document.querySelector(".color");
const changeButton = document.querySelector(".change-color");
const changeColor = () => {
  const color = getRandomHexColor();
  backgroundColor.style.backgroundColor = color;
  text.innerHTML = color;
};
changeButton.addEventListener("click", changeColor);