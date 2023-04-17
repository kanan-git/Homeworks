const hamburgerMenu = document.querySelector(".hmenu")
const button = document.querySelector(".hmenu__button")
const overlay = document.querySelector(".overlay")

menuToggle = () => {
    hamburgerMenu.classList.toggle("close-menu")
    button.classList.toggle("button-active")
}

menuClose = () => {
    hamburgerMenu.classList.add("close-menu")
    button.classList.remove("button-active")
}

button.addEventListener("click", menuToggle)
overlay.addEventListener("click", menuClose)