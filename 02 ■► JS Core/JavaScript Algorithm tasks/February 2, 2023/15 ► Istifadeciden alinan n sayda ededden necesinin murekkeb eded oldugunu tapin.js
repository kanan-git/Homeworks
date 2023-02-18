var n = +prompt("Daxil edilecek eded sayi:", "1")
var counter = 0
var murekkebEdedlerinSayi = 0

while (counter < n) {
    var input = +prompt("Eded daxil edin:", "123")
    counter++
    var bolenlerinSayi = 0
    for (var bolen = 1; bolen <= input; bolen++) {
        mod = input % bolen
        if (mod == 0) {
            bolenlerinSayi++
        }
    }
    if (bolenlerinSayi > 2) {
        murekkebEdedlerinSayi++
    }
}

console.log("Murekkeb ededlerin sayi: ", murekkebEdedlerinSayi)