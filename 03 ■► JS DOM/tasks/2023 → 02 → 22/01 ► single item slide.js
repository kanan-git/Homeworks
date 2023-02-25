const prevBtn = document.querySelector(".btn-prev")
const nextBtn = document.querySelector(".btn-next")
const slides = document.querySelectorAll(".slide")
const radios = document.querySelectorAll("input[name='radio-buttons']")
const btn = document.querySelector(".test-btn")

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
    radios[currentIndex].getAttribute("checked")
}))
nextBtn.addEventListener("click", () => {
    currentIndex === latestIndex ? (currentIndex = 0) : currentIndex++
    console.log(currentIndex)
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentIndex)}%)`
    })
    radios[currentIndex].getAttribute("checked")
})

tempFunction = () => {
    for (var r=0; r<radios.length; r++)
    if (radios[r].checked) {
        currentIndex = r
    }
}

btn.addEventListener("click", tempFunction)