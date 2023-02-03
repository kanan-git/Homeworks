var input = prompt("Eded daxil edin", "12345")

while (input > 0) {
    var digit = input % 10
    var input = Math.trunc(input / 10)
    var mod = digit % 2
    if (mod == 0) {
        console.log(digit)
    }
}