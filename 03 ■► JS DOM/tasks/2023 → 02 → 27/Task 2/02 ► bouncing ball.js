// 02 => Creating a bouncing ball: Use the same basic animation loop to create a bouncing ball animation. Make the ball bounce back and forth across the screen, changing direction each time it hits a wall.

const ball = document.querySelector(".container__ball")
const testbtn1 = document.querySelector(".testbtn1")
const testbtn2 = document.querySelector(".testbtn2")

testbtn1.addEventListener("click", 
() => {
    ball.style.animation = `bouncingToRight 3s ease-in 0s 1 normal forwards`
    console.log("working")
}
)
testbtn2.addEventListener("click", 
() => {
    ball.style.animation = `riseToRight 3s ease-out 0s 1 normal forwards`
    console.log("working")
}
)