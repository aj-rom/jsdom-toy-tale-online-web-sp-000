let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

let toyCollection = document.getElementById('toy-collection')
const allToyHeader = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
}

function fetchToys() {
  return fetch('http://localhost:3000/toys', allToyHeader)
      .then(resp => resp.json())
      .then(e => renderToys(e))
      .catch(e => {
        console.log("An error has occurred while fetching toys.")
      })
}

function renderToys(toys) {
    toys.forEach(toy => {
      let div = document.createElement('div')
      div.class = 'card'

      let h2 = document.createElement('h2')
      h2.textContent = toy.name

      let img = document.createElement('img')
      img.src = toy.url

      let p = document.createElement('p')
      p.textContent = `${toy.likes} Likes`

      let button = document.createElement('button');
      button.class = 'like-btn'
      button.innerText = 'Like <3'

      div.append(h2, img, p, button)
      toyCollection.appendChild(div)
    })
}

fetchToys()