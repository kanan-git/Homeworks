var input = +prompt("Eded daxil edin", "123")
var multi = 1

for (var bolen = 1; bolen <= input; bolen++) {
    var z = input % bolen
    if (z==0) {
        multi *= bolen;
    }
}

console.log("Ededin bolenlerinin hasili", multi)