var input = prompt("Eded daxil edin", "123");

while (input > 0) {
    var digit = input % 10
    var input = Math.trunc(input / 10)
    // ededin reqemlerinin bolenlerinin cemi - default 0
    var sum = 0
    // ededin reqemlerinin bolenlerinin tapilmasi
    for (divider = 1; divider < digit; divider++) {
        var mod = digit % divider
        if (mod == 0) {
            // ededin reqeminin bolenlerinin cemi
            sum += divider
        }
    }
    // mukemmel ededin yoxlanmasi
    if (sum == digit) {
        console.log("Ededin muekkemel reqemleri: ", sum)
    }
}