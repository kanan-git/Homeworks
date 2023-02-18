var array = [5, 15, 9, 108, 59, 93]

for (var n = 0; n < array.length; n++) {
    var mod = array[n] % 10
    if (mod == 9) {
        console.log(array[n])
    }
}