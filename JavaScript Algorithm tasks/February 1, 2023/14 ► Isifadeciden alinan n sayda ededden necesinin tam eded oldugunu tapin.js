var n = +prompt("Daxil edilecek eded sayini yazin", "1")
var counter = 0

for (var i = 1; i <= n; i++) {
    var input = +prompt("Eded daxil edin", "123")
    var mod = input % 1
    if (mod == 0) {
        counter++
    }
    else {}
}

console.log("Tam ededlerin say: ", counter)