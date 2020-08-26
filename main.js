window.addEventListener("DOMContentLoaded", getData);
console.log("hello world");

const modal = document.querySelector(".modal-background");
modal.addEventListener("click", () => {
  modal.classList.add("hide");
});

function getData() {
  fetch("actors.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderData(data);
    });
}

function renderData(jsonData) {
  console.log("actors", jsonData);

  jsonData.forEach(function (actor) {
    let template = document.querySelector("template").content;

    let aCopy = template.cloneNode(true);
    console.log("actor", actor);
    aCopy.querySelector(".actor-name").textContent = actor.fullname;

    aCopy.querySelector(".actor").addEventListener("click", () => {
      console.log("click", actor);

      showModalDetails(actor);
    });
    let parent = document.querySelector(".actors");
    parent.appendChild(aCopy);
  });
}

function showModalDetails(data) {
  modal.querySelector(".actor-name").textContent = data.fullname;
  modal.querySelector(".movie").textContent = data.movie;

  modal.classList.remove("hide");
}
