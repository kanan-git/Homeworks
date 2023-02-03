// var n = +prompt("Eded daxil edin", "6")
// var φ = 1.618034

// var x = (φ ** n - (1 - φ) ** n) / 5 ** 0.5
// var f = Math.trunc(x)

// console.log("Fibonacci sequence numbers: ", f)

var n = 0
var m = +prompt("Sonuncu ededi daxil edin", "30")
var φ = 1.618034

while (n < m) {
    var x = (φ ** n - (1 - φ) ** n) / 5 ** 0.5
    var f = Math.trunc(x)
    
    console.log("Fibonacci sequence numbers: ", f)

    n++
}