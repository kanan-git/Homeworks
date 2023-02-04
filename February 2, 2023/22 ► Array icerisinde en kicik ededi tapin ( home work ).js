var array = [5, 15, 9, 108, 59, 93]
var x = 1

while (array[n] != x) {
    for (var n = 0; n < array.length; n++) {
        if (array[n] == x) {
            console.log("En kicik eded: ", array[n])
            break
        }
    }
    if (array[n] == x) {
        break
    }
    x++
}