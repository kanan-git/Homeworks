var input = +prompt("Eded daxil edin", "123")
var sum = 0

for (var bolen = 1; bolen <= input; bolen++) {
    var z = input % bolen
    if (z==0) {
        sum += bolen;
    }
}

console.log("Ededin bolenlerinin cemi", sum)