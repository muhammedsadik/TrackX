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

export let studyRoomRepo = [
  {
    id: 1,
    repoName: "top-first-door",
    content: [
      {
        id: 1,
        contentName: "Kalemlik",
        addedAt: "01.01.2025",
        description: "Siyah tükenmez kalem, kurşun kalem ve silgi."
      },
      {
        id: 2,
        contentName: "Cüzdan",
        addedAt: "07.01.2025",
        description: null
      },
      {
        id: 3,
        contentName: "Kulaklık",
        addedAt: "19.02.2025",
        description: "Telefon kulaklığı"
      }
    ]
  },
  {
    id: 2,
    repoName: "top-second-door",
    content: [
      {
        id: 1,
        contentName: "Parfüm",
        addedAt: "03.01.2025",
        description: null
      },
      {
        id: 2,
        contentName: "Kol Saati",
        addedAt: "07.01.2025",
        description: "Kahverengi kol saati"
      },
      {
        id: 3,
        contentName: "Akıllı Saat",
        addedAt: "19.02.2025",
        description: "Bordo renk Akıllı saat"
      },
      {
        id: 4,
        contentName: "Mause",
        addedAt: "20.02.2025",
        description: "Eski Mause"
      }
    ]
  }
]



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