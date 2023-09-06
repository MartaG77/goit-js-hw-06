const validationInput = document.querySelector("#validation-input");
const valueLength = validationInput.getAttribute("data-length");
const validation = () => {
  if (validationInput.value.length < valueLength) {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  } 
  else if (validationInput.value.length > valueLength) {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  } 
  else {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  }
};
validationInput.addEventListener("blur", validation);
