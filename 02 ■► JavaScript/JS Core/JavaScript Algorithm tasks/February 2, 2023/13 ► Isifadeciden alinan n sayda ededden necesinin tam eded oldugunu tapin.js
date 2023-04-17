var n = +prompt("Daxil edilecek eded sayi:", "1")
var counter = 0
var tamEdedlerinSayi = 0

while (counter < n) {
    var input = +prompt("Eded daxil edin:", "123")
    counter++
    mod = input % 1
    if (mod == 0) {
        tamEdedlerinSayi++
    }
}

console.log("Tam ededlerin sayi: ", tamEdedlerinSayi)