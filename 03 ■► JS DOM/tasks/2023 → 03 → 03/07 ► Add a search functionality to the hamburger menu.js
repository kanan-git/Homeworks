// This code should be adds a search form to the menu, which allows the user to search the website. It also adds a keydown event listener to the document, which listens for the / key to open the search form. When the search form is submitted, it retrieves the user's query and performs a search.

const menu = document.querySelector(".menu")
const button = document.querySelector(".button")
const submit = document.querySelector(".menu__container--submit")
const searchBar = document.querySelector(".menu__container--search")

button.addEventListener("click", 
() => {
    button.classList.toggle("active-button")
    menu.classList.toggle("close-menu")
}
)

submit.addEventListener("click", 
() => {
    // console.log(searchBar.value)
    var target = searchBar.value
}
)