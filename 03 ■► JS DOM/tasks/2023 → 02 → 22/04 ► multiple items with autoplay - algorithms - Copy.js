const nextButton = document.querySelector(".btn-next")
const prevButton = document.querySelector(".btn-prev")
const container = document.querySelector(".container")
const imageSlides = document.querySelectorAll(".container__triplebox")
const dotButtons = document.querySelectorAll(".dot-disc")

var currentIndex = 0
var latestIndex = imageSlides.length-1

imageSlides.forEach((image, index) => {
    image.style.transform = `translateX(${100 * (index - currentIndex)}%)`
})

nextButton.addEventListener("click",
    () => {
        console.log(currentIndex)
        currentIndex>=latestIndex ? (currentIndex=0) : currentIndex++
        imageSlides.forEach((image, index) => {
        image.style.transform = `translateX(${100 * (index - currentIndex)}%)`})
        dotButtons[currentIndex].classList.add("selected")
    }
)
prevButton.addEventListener("click",
    () => {
        console.log(currentIndex)
        currentIndex===0 ? (currentIndex=latestIndex) : currentIndex--
        imageSlides.forEach((image, index) => {
        image.style.transform = `translateX(${100 * (index - currentIndex)}%)`}
    )}
)