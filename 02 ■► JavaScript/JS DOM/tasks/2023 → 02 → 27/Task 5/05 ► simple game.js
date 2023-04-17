// 05 => Creating a simple game: Use the basic animation loop to create a simple game, such as a "catch the falling object" game. Make sure to include collision detection to detect when the object is caught.

// VALUES
const container = document.createElement("div")
const body = document.querySelector("body")
var n = 10
var counter = 0
var score = 0
const startGame = document.querySelector(".start-button")
const yourScore = document.createElement("p")

// GENERATE CONTAINER
container.classList.add("container")
body.appendChild(container)

// CREATING BALLS AND THEIR ARRAY
fallingBallsFunc = () => {
    counter++
    var max = Math.floor(Math.random() * 350)
    max += "px"
    const fallingBalls = document.createElement("div")
    container.appendChild(fallingBalls)
    fallingBalls.classList.add("falling-balls")
    fallingBalls.style.left = `${max}`
    // console.log(counter)
    fallingBalls.addEventListener("click", () => {
        fallingBalls.style.scale = `0.1`
        score++
        yourScore.textContent = "Your score: " + score
        console.log("+1", score)
    })
    if (counter >= n) {
        clearInterval(time)
        body.appendChild(yourScore)
        yourScore.classList.add("your-score")
    }
}

// SET BALLS FREE TO FALL
startGame.addEventListener("click", 
    () => {
        time = setInterval(fallingBallsFunc, 1000)
        startGame.classList.add("hidden")
    }
)