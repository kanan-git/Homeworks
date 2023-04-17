var n = +prompt("Daxil edilecek eded sayini yazin", "1")
var x = 1
var y = 0

while (x <= n) {
    var input = +prompt("Eded daxil edin", "123")
    var counter = 0
    for (var bolen = 1; bolen <= input; bolen++) {
        var qaliq = input % bolen
        if (qaliq == 0) {
            counter++
        }
    }
    if (counter <= 2) {
        y++
    }
    x++
}

console.log("Sade eded sayi: ", y)