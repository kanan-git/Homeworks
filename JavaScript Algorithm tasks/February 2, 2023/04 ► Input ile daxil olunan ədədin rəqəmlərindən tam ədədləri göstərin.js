var input = prompt("Eded daxil edin", "12345")
var previousValue = input

for (var i = 9; i > 0; i--) {
    while (input > 0) {
        var digit = input % 10
        var input = Math.trunc(input / 10)
        console.log("Ededin tam reqemleri: ", digit)
    }
}