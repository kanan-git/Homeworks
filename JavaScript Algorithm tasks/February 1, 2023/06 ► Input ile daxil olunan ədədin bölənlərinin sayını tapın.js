var input = +prompt("Eded daxil edin", "123")
var counter = 0

for (var bolen = 1; bolen <= input; bolen++) {
    var z = input % bolen
    if (z==0) {
        counter++;
    }
}

console.log("Ededin bolenlerinin sayi", counter)