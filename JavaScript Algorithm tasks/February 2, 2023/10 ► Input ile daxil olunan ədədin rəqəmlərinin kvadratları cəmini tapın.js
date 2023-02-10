var input = +prompt("Eded daxil edin", "123")
var sum = 0

while (input>0) {
    var digit = input % 10
    var input = Math.trunc(input / 10)
    sum += digit ** 2
}

console.log("Ededin reqemlerinin kvadratlari cemi: ", sum)