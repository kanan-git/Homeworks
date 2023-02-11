var integer = 123456
var reversedInteger = ""

while (integer > 0) {
    mod = integer % 10
    integer = Math.trunc(integer / 10)
    reversedInteger += mod
}

console.log(reversedInteger)