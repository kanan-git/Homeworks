var input = +prompt("Eded daxil edin", "123")
var hasil = 1

while (input > 0) {
    digit = input % 10
    input = Math.trunc(input/10)
    hasil *= digit
}

console.log("Ededin reqemlerinin hasili: ", hasil)