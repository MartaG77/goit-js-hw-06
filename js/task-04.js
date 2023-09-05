const decrButton = document.querySelector("[data-action='decrement']");
const incrButton = document.querySelector("[data-action='increment']");
const value = document.querySelector("#value");
let counterValue = 0;
const decrease = () => {
  counterValue -= 1;
  value.innerHTML = counterValue;
};
const increase = () => {
  counterValue += 1;
  value.innerHTML = counterValue;
};
decrButton.addEventListener("click", decrease);
incrButton.addEventListener("click", increase);