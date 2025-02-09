const incorrectEntry = "Email address or password is incorrect";
const emptyMsg = "Field cannot be empty";
const invalid = "Invalid operation";

import { getLocalStorage, setLocalStorage } from "./localStorage.js";
const users = getLocalStorage("users") || [];

const loginForm = document.querySelector(".login-form form");

loginForm.addEventListener("submit", login);

function login(e) {
  e.preventDefault();

  const formObj = Object.fromEntries(new FormData(loginForm));

  formObj.email = formObj.email.trim();
  formObj.password = formObj.password.trim();

  const user = loginValidation(e, formObj)

  if (!user) return;

  user.isLoggedIn = true
  setLocalStorage("users", users)

  loginForm.reset();
  window.location.href = `/index.html?userId=${user.id}`;
}

function loginValidation(e, formObj) {

  if (formObj.email == "" || formObj.password == "") {
    alert(emptyMsg);
    return false;
  }

  const user = users.find(u => u.email === formObj.email)
  if (!user) {
    alert(incorrectEntry);
    return false;
  }

  if (user.password !== formObj.password) {
    alert(incorrectEntry);
    return false;
  }

  return user;
}