const studyRoomRepo = [
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
      }
    ]
  }
]

const topFirstDoor = document.querySelector(".top-first-door");
const content = document.querySelector("#contents");
const contentList = document.querySelector(".content-list");

topFirstDoor.addEventListener("click", listRepo);

function listRepo(e) {
  e.preventDefault();

  const q = studyRoomRepo.find(repo => repo.repoName == "top-first-door");


  content.style.display = "block";

  



}