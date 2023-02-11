var input = +prompt("Enter a number:", "123")
var Fuzz = []
var Buzz = []
var FuzzBuzz = []

for (i = 2; i <= input; i++) {
    var modF = i % 2
    if (modF == 0) {
        Fuzz.push(i)
    }
    
    var modB = i % 3
    if (modB == 0) {
        Buzz.push(i)
    }

    var modFB = i % 6
    if (modFB == 0) {
        FuzzBuzz.push(i)
    }
}

console.log("Dividies to 2 numbers till input: ", Fuzz)
console.log("Dividies to 3 numbers till input: ", Buzz)
console.log("Dividies to 2 & 3 numbers till input: ", FuzzBuzz)