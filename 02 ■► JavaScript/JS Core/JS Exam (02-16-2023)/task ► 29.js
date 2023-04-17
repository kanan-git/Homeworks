// Memoized Fibonacci

var n = +prompt("Enter Fibonacci count:", "10")

function Fibonacci(n) {
    if (n < 2) return 1
    return Fibonacci[i-1] + Fibonacci[i-2]
}

console.log(Fibonacci(n))