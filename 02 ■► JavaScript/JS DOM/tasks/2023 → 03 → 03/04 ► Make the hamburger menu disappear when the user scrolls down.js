const hamburgerMenu = document.querySelector(".hmenu")
const button = document.querySelector(".hmenu__button")
const all = document.querySelector("*")

menuToggle = () => {
    hamburgerMenu.classList.toggle("close-menu")
    button.classList.toggle("button-active")
}

button.addEventListener("click", menuToggle)

all.addEventListener("mousewheel", 
() => {
    hamburgerMenu.classList.add("close-menu")
    button.classList.remove("button-active")
}
)