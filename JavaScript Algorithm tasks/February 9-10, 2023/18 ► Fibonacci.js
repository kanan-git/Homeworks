var input = +prompt("Eded daxil edin:", "50")
var fib = [0, 1]
var i = 1

while (fib[i] < input) {
    fib.push(fib[i] + fib[i-1])
    i++
}

if (fib[i] > input) {
    fib.pop(fib[i])
}

console.log(fib)