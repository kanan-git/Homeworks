// TASK | https://sweetalert2.github.io/ —→ A basic message

const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const openBtn = document.querySelector(".btn-open")
const closeBtn = document.querySelector(".btn-close")

const closePopup = () => {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

const openPopup = () => {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
    setTimeout(closePopup, 1000)
}

openBtn.addEventListener("click", openPopup)
overlay.addEventListener("click", closePopup)