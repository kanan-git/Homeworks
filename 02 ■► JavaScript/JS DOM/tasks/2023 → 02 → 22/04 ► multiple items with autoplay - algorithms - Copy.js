// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
const nextButton = document.querySelector(".btn-next")
const prevButton = document.querySelector(".btn-prev")
const container = document.querySelector(".container")
const imageSlides = document.querySelectorAll(".container__triplebox")
const dotButtons = document.querySelectorAll(".dots__disc")
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
var currentIndex = 0
var latestIndex = imageSlides.length-1
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
imageSlides.forEach((image, index) => {
    image.style.transform = `translateX(${100 * (index - currentIndex)}%)`
})
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
nextButton.addEventListener("click",
    () => {
        // console.log(currentIndex)
        currentIndex>=latestIndex ? (currentIndex=0) : currentIndex++
        imageSlides.forEach((image, index) => {
        image.style.transform = `translateX(${100 * (index - currentIndex)}%)`}
    )
    dotButtons[currentIndex].classList.add("selected")
    if (currentIndex == 0) {
        dotButtons[latestIndex].classList.remove("selected")
    }
    else {
        dotButtons[currentIndex-1].classList.remove("selected")
    }
    }
)
prevButton.addEventListener("click",
    () => {
        // console.log(currentIndex)
        currentIndex===0 ? (currentIndex=latestIndex) : currentIndex--
        imageSlides.forEach((image, index) => {
        image.style.transform = `translateX(${100 * (index - currentIndex)}%)`}
    )
    dotButtons[currentIndex].classList.add("selected")
    if (currentIndex == latestIndex) {
        dotButtons[0].classList.remove("selected")
    }
    else {
        dotButtons[currentIndex+1].classList.remove("selected")
    }
    }
)
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// dotButtons.forEach(
//     (dots, dotIndex) => {
//         for (var i=0; i<dotButtons.length; i++) {
//             if (dotIndex == i) {
//                 console.log(dotIndex)
//                 break
//             }
//         }
//         console.log(dots[dotIndex])
//     }
// )

// dotButtons.addEventListener("click", 
//     () => {
//         for (var i=0; i<dotButtons.length; i++) {
//             if (dotButtons[i].addEventListener) {
//                 currentIndex = i
//                 console.log(currentIndex)
//                 break
//             }
//         }
//     }
// )
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬