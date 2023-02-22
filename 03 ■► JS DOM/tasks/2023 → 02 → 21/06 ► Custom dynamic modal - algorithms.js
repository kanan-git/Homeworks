// custom dynamic pop-up screen
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const openBtn = document.querySelector(".btn-open")
const closeBtn = document.querySelector(".btn-close")
const posBtnTL = document.querySelector(".posBtn__pos-tl")
const posBtnTR = document.querySelector(".posBtn__pos-tr")
const posBtnC = document.querySelector(".posBtn__pos-c")
const posBtnBL = document.querySelector(".posBtn__pos-bl")
const posBtnBR = document.querySelector(".posBtn__pos-br")

// function for open the popup
const openPopup = () => {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

// function for close the popup
const closePopup = () => {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

// functions for adjusting position of the popup
const moveTL = () => {
    modal.classList.remove("top-left")
    modal.classList.remove("top-right")
    modal.classList.remove("center")
    modal.classList.remove("bottom-left")
    modal.classList.remove("bottom-right")
    modal.classList.add("top-left")
}
const moveTR = () => {
    modal.classList.remove("top-left")
    modal.classList.remove("top-right")
    modal.classList.remove("center")
    modal.classList.remove("bottom-left")
    modal.classList.remove("bottom-right")
    modal.classList.add("top-right")
}
const moveC = () => {
    modal.classList.remove("top-left")
    modal.classList.remove("top-right")
    modal.classList.remove("center")
    modal.classList.remove("bottom-left")
    modal.classList.remove("bottom-right")
    modal.classList.add("center")
}
const moveBL = () => {
    modal.classList.remove("top-left")
    modal.classList.remove("top-right")
    modal.classList.remove("center")
    modal.classList.remove("bottom-left")
    modal.classList.remove("bottom-right")
    modal.classList.add("bottom-left")
}
const moveBR = () => {
    modal.classList.remove("top-left")
    modal.classList.remove("top-right")
    modal.classList.remove("center")
    modal.classList.remove("bottom-left")
    modal.classList.remove("bottom-right")
    modal.classList.add("bottom-right")
}

// event listeners
openBtn.addEventListener("click", openPopup)
closeBtn.addEventListener("click", closePopup)
overlay.addEventListener("click", closePopup)
posBtnTL.addEventListener("click", moveTL)
posBtnTR.addEventListener("click", moveTR)
posBtnC.addEventListener("click", moveC)
posBtnBL.addEventListener("click", moveBL)
posBtnBR.addEventListener("click", moveBR)