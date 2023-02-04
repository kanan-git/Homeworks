var array = [5, 15, 9, 108, 59, 93]
var counter = 0

for (var n = 0; n < array.length; n++) {
    var mod = array[n] % 2
    if (mod == 1) {
        counter++
    }
}

console.log("Tek eded sayi: ", counter)