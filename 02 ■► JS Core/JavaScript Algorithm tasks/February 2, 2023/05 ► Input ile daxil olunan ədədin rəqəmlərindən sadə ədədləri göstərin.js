var input = prompt("Eded daxil edin", "12345")

while (input > 0) {
    var digit = input % 10
    var input = Math.trunc(input / 10)
    var counter = 0
    for (var divider = 1; divider <= digit; divider++) {
        var mod = digit % divider
        if (mod == 0) {
            counter++
        }
    }
    if (counter <= 2) {
        console.log(digit)
    }
}