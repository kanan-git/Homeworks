let randomDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const digitGenerator = () => {
    let elements = document.querySelector("#digit")
    let randomIndex = Math.floor(Math.random() * randomDigits.length)

    // elements.innerHTML = randomDigits[randomIndex]
    // elements.textContent = randomDigits[randomIndex]
    elements.innerHTML = `<b>${randomDigits[randomIndex]}</b>`
    elements.style.marginLeft = "20px"
}

let btn = document.querySelector("#btn")
btn.addEventListener("click", digitGenerator)