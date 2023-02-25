const clickBtn = document.querySelector(".click")
const modal = document.querySelector(".modal")
const cancelBtn = document.querySelector(".modal__cancel")
const saveBtn = document.querySelector(".modal__save")
const dontSaveBtn = document.querySelector(".modal__dont-save")
const overlay = document.querySelector(".overlay")
const sSaved = document.querySelector(".successfully-saved")
const dSave = document.querySelector(".didnt-save")


clickBtn.addEventListener("click", 
() => {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}
)
overlay.addEventListener("click", 
() => {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}
)

closeSavedPopup = () => {
    sSaved.classList.add("hidden")
}
openSavedPopup = () => {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
    sSaved.classList.remove("hidden")
    setTimeout(closeSavedPopup, 1000)
}

closeDidntSavePopup = () => {
    dSave.classList.add("hidden")
}
openDidntSavePopup = () => {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
    dSave.classList.remove("hidden")
    setTimeout(closeDidntSavePopup, 1000)
}

saveBtn.addEventListener("click", openSavedPopup)
dontSaveBtn.addEventListener("click", openDidntSavePopup)

cancelBtn.addEventListener("click", 
() => {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}
)