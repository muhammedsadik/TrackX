const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');

import { getLocalStorage } from "./localStorage.js";
const users = getLocalStorage("users") || [];

const user = users.find(u => u.id == userId)

if (!user || !userId || !user.isLoggedIn) {
  alert("giriş yapmadınız login'e yönlendiriliyorsunuz");
  window.location.href = `/assets/html/login.html`;
}
