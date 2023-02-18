var input = +prompt("Eded daxil edin:", "10")
var multi = 1

console.log("Daxil edilen eded: ", input)

while (input > 0) {
    multi *= input
    input--
}

console.log("Ededin faktoriali (n!) beraberdir: ", multi)