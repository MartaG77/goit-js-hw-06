const sizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const changeSize = () =>
  (text.style.fontSize = `${sizeControl.value}px`);
sizeControl.addEventListener("input", changeSize);