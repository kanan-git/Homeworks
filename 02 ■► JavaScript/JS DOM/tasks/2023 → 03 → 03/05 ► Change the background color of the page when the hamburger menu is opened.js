const hamburgerMenu = document.querySelector(".hmenu")
const button = document.querySelector(".hmenu__button")
const overlay = document.querySelector(".overlay")
const body = document.body

menuToggle = () => {
    hamburgerMenu.classList.toggle("close-menu")
    button.classList.toggle("button-active")
    body.classList.toggle("body-effect")
}

menuClose = () => {
    hamburgerMenu.classList.add("close-menu")
    button.classList.remove("button-active")
    body.classList.remove("body-effect")
}

button.addEventListener("click", menuToggle)
overlay.addEventListener("click", menuClose)