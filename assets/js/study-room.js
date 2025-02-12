import { studyRoomRepo } from "./localStorage.js";
let contents = [];
let doorContents;

const contentModal = document.querySelector("#contents");
const contentList = document.querySelector(".content-list");

const topFirstDoor = document.querySelector(".top-first-door");
const topSecondtDoor = document.querySelector(".top-second-door");

topFirstDoor.addEventListener("click", () => listRepo("top-first-door"));
topSecondtDoor.addEventListener("click", () => listRepo("top-second-door"));


function listRepo(clickedDoor) {

  doorContents = studyRoomRepo.find(repo => repo.repoName == clickedDoor).content;

  contents = "";

  doorContents.forEach(c => {
    contents += `
      <li class="content">
        <a href="#">
          <h4>${c.contentName}</h4>
          <span>${c.addedAt}</span>
        </a>
        <i data-id="${c.id}" class="fa-solid fa-trash-can delete"></i>
      </li>    
    `
  });

  contentList.innerHTML = contents;
  contentModal.showModal();

  const closeBtn = document.querySelector('.close-btn')
  .addEventListener('click', () =>  contentModal.close());
  
  contentModal.addEventListener('click', (e) => {    
    if (e.target === contentModal) {
      contentModal.close();
    }
  })

  bindDeleteBtn(clickedDoor);
}

function bindDeleteBtn(clickedDoor) {
  const deleteContentIcon = document.querySelectorAll('.delete');
  deleteContentIcon.forEach(del => del.addEventListener('click', (e) => deleteContent(e, clickedDoor)));
}


function deleteContent(e, clickedDoor) {
  doorContents = doorContents.filter(repo => repo.id != e.target.dataset.id);
  studyRoomRepo.find(repo => repo.repoName == clickedDoor).content = doorContents

  listRepo(clickedDoor);
}