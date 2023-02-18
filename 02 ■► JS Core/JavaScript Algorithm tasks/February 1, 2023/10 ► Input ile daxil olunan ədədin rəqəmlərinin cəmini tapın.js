var input = +prompt("Eded daxil edin", "123")
var cem = 0

while (input > 0) {
    digit = input % 10
    input = Math.trunc(input/10)
    cem += digit
}

console.log("Ededin reqemlerinin cemi: ", cem)