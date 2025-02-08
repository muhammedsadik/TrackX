let users = [
  {
    "id": 1,
    "age": 25,
    "gender": "male",
    "name": "John",
    "surname": "Doe",
    "password": "password123",
    "email": "johndoe@example.com",
    "isLoggedIn": false
  },
  {
    "id": 2,
    "age": 30,
    "gender": "female",
    "name": "Jane",
    "surname": "Smith",
    "password": "qwerty456",
    "email": "janesmith@example.com",
    "isLoggedIn": false
  }
];

if (!localStorage.users) {
  localStorage.users = JSON.stringify(users);
}


export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
  
export function getLocalStorage(key) {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }

  return null;
}