// constant variables
const requestScreen = document.querySelector(".reqscrn")
const overlay = document.querySelector(".overlay")
const random = document.querySelector(".random")
const clickButton = document.querySelector(".btn")
const randomImages = document.querySelector("#random")
const inputBar = document.querySelector(".reqscrn__bar")
const text = document.querySelector(".random__text")
const requestButton = document.querySelector(".reqscrn__request")
const cancelBtn = document.querySelector(".reqscrn__cancel")
const okBtn = document.querySelector(".random__ok")

var image = document.querySelector("#image")
var imagesArray = [
    "/03 ■► JS DOM/tasks/2023 → 02 → 22/2023-02-22 assets/images/minecraft.jpg",
    "/03 ■► JS DOM/tasks/2023 → 02 → 22/2023-02-22 assets/images/pubg-battlegrounds.jpg"
]

// arrow functions
openPopup = () => {
    requestScreen.classList.remove("hidden")
    overlay.classList.remove("hidden")
}
closePopup = () => {
    requestScreen.classList.add("hidden")
    overlay.classList.add("hidden")
}
getAnImage = () => {
    requestScreen.classList.add("hidden")
    random.classList.remove("hidden")
}
closeAll = () => {
    random.classList.add("hidden")
    overlay.classList.add("hidden")
}

// event triggers
clickButton.addEventListener("click", openPopup)
cancelBtn.addEventListener("click", closePopup)
overlay.addEventListener("click", closePopup)
overlay.addEventListener("click", closeAll)
requestButton.addEventListener("click", getAnImage)
okBtn.addEventListener("click", closeAll)

// actions with anonymous functions
requestButton.addEventListener("click", 
() => {
    image.src = imagesArray[0]
    console.log(inputBar.value)
    console.log(image, imagesArray)
}
)