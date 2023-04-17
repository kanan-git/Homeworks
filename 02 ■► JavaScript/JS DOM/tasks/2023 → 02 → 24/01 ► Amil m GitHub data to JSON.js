// https://dog.com/api/breeds/image/random
// https://github.com/AmilAbdullazadeh/paw-games

let container = document.querySelector(".container")

function fetchDataTest () {
    fetch("https://github.com/AmilAbdullazadeh/paw-games")
    .then(res => res.json())
    .then(data => {
        let paragraph = document.createElement("p")
        // img.src = data.message
        p.textContent = data.message
        container.appendChild(paragraph)
    })
}

fetchDataTest()