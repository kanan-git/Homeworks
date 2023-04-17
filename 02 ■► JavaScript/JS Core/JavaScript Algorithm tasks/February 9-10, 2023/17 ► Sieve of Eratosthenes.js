var input = +prompt("Eded daxil edin:", "100")
var primeNumbers = []
var primeNumbersCount = 0

for (var i = 2; i <= input; i++) {
    var dividersCount = 1
    for (var div = 2; div <= i; div++) {
        var mod = i % div
        if (mod == 0) {
            dividersCount++
        }
    }
    if (dividersCount <= 2) {
        primeNumbers.push(i)
        primeNumbersCount++
    }
}

console.log("Sade ededler: ", primeNumbers, " Sade ededlerin sayi: ", primeNumbersCount)