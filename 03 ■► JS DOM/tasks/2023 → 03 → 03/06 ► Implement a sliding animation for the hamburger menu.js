// This code should be adds a transitionend event listener to the menu element, which fires when the CSS transition is complete. It then checks if the menu is visible, and sets its display property to 'none' or 'block' accordingly.

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

// button.addEventListener("click", menuToggle)
// overlay.addEventListener("click", menuClose)

button.addEventListener("click", setTimeout(menuToggle, 500))
overlay.addEventListener("click", setTimeout(menuClose, 500))