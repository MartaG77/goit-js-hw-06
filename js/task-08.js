const form = document.querySelector(".login-form");
const loginForm = event => {
  event.preventDefault();
  const {
    elements: {email, password},
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Error! All fields should be filled in ;-)");
  }
  const objectData = {
    email: email.value,
    password: password.value,
  };
  event.currentTarget.reset();
};
form.addEventListener("submit", loginForm);
