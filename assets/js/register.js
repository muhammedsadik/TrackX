const userAlreadyExist = "User Already Registered";
const emptyMsg = "Field cannot be empty";
const invalid = "Invalid operation";
const passwordLengthMsg = "Password must be 6 digit";
const passwordNotSamehMsg = "Passwords are not the same";

import { getLocalStorage, setLocalStorage } from "./localStorage.js";
const users = getLocalStorage("users") || [];

const registerForm = document.querySelector(".register-form form");

registerForm.addEventListener("submit", registerUser);

function registerUser(e) {
  e.preventDefault();

  const formObj = Object.fromEntries(new FormData(registerForm));
  formObj.userName = formObj.userName.trim();
  formObj.email = formObj.email.trim();
  formObj.password = formObj.password.trim();
  formObj.confirmPassword = formObj.confirmPassword.trim();

  if (!registerValidation(e, formObj)) return;

  const userId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

  const newUser = {
    id: userId,
    age: null,
    gender: null,
    name: formObj.userName,
    surname: null,
    password: formObj.password,
    email: formObj.email,
    isLoggedIn: true
  }

  users.push(newUser);
  setLocalStorage("users", users);

  registerForm.reset();
  window.location.href = `/Index.html?userId=${userId}`;

  // TODO: index.js te veri bu şekilde alınacak.
  // const urlParams = new URLSearchParams(window.location.search);
  // const userId = urlParams.get('userId');
  // userId string olarak gelir
}

function registerValidation(e, formObj) {
  if (
    formObj.userName == ""
    || formObj.email == ""
    || formObj.password == ""
    || formObj.confirmPassword == ""
  ) {
    alert(emptyMsg);
    return false;
  }

  if (formObj.password.length < 6) {
    alert(passwordLengthMsg);
    e.target
    return false;
  }

  if (users.some(u => u.email == formObj.email)) {
    alert(userAlreadyExist);
    e.target.email.value = "";
    return false;
  }

  if (formObj.password != formObj.confirmPassword) {
    alert(passwordNotSamehMsg);
    e.target.confirmPassword.value = "";
    return false;
  }

  return true;
}