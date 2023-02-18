// Arraydaki sadə ədədləri göstərin

var array = [5, 30, 3, 6, 11, 12]
var arrayPrime = []

for (var i=0; i<array.length; i++) {
    var bolenlerinSayi = 0
    for (var bolen=1; bolen<array[i]; bolen++) {
        var mod = array[i] % bolen
        if (mod == 0) {
            bolenlerinSayi++
        }
    }
    if (bolenlerinSayi <= 2) {
        arrayPrime.push(array[i])
    }
}

console.log(arrayPrime)