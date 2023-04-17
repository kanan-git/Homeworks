var input = prompt("Eded daxil edin", "12345")
var previousValue = input

for (var i = 9; i > 0; i--) {
    while (input > 0) {
        var digit = input % 10
        var input = Math.trunc(input / 10)
        if (digit == i) {
            console.log("Ededin en boyuk reqemi: ", digit)
            break
        }
    }
    input = previousValue
    
    if (digit == i) {
        break
    }
}