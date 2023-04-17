var a = +prompt("I ededi daxil edin", "1")
var b = +prompt("II ededi daxil edin", "2")
var max
var min

if (a>b) {
    max = a
    min = b
}
else {
    max = b
    min = a
}

while (max > min) {
    // sade ededin tapilmasi
    var counter = 0
    for (var bolen = 1; bolen <= max; bolen++) {
        var qaliq = max % bolen
        if (qaliq == 0) {
            counter++
        }
    }
    if (counter <= 2) {
        console.log("En boyuk sade eded: ", max)
        break
    }
    else {
        max--
    }
}