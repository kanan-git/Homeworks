var array = [0.0101, 5, 15, 10.5, 9, 108.4, 59, 93]
var sum = 0

for (var n = 0; n < array.length; n++) {
    var mod = array[n] % 1
    if (mod == 0) {
        sum += array[n]
    }
}

console.log("Tam ededlerin cemi: ", sum)