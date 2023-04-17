var n = +prompt("Enter count for Fibonacci:", "10")

function donFibonacci(n) {
    var arr = [0, 1]
    if (n <= 2) {
        return arr
    }
    for (var i=2; i<n; i++) {
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr
}

console.log(donFibonacci(n))