// copied from task no 1

const prevBtn = document.querySelector(".btn-prev")
const nextBtn = document.querySelector(".btn-next")
const slides = document.querySelectorAll(".slide")

let currentIndex = 0
let latestIndex = slides.length - 1

// set first slide to position 0
slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentIndex)}%)`
})

prevBtn.addEventListener("click", (() => {
    currentIndex === 0 ? (currentIndex = latestIndex) : currentIndex--
    console.log(currentIndex)
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentIndex)}%)`
    })
}))
nextBtn.addEventListener("click", () => {
    currentIndex === latestIndex ? (currentIndex = 0) : currentIndex++
    console.log(currentIndex)
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentIndex)}%)`
    })
})


// center mode with loop => center mode div's index (copy in bigger frame like sync)