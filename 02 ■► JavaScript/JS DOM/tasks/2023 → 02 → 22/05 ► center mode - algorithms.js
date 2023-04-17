const slides = document.querySelectorAll(".container__slides")

var currentIndex = 0
var latestIndex = slides.length-1

slides.forEach(
    (slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentIndex)}%)`
    }
)