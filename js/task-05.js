const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
const anonymousText = textOutput.innerHTML;
const textChange = () => {
  if (textInput.value !=="") {
    textOutput.innerHTML = textInput.value;
  } 
  else {
    textOutput.innerHTML = anonymousText;
  }
};
textInput.addEventListener("input", textChange);