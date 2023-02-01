var input = +prompt("Eded daxil edin", "123")
var counter = 0

while (input > 0) {
    digit = input % 10
    input = Math.trunc(input/10)
    counter++
}

console.log("Ededin reqemlerinin sayi: ", counter)