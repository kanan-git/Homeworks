// Daxil etdiyimiz array-de neçə cüt element var. Bunu tapan funksiya yazin

var arr = [2, 11, 100, 6, 15, 22]
var cntr = 0

for (var i=0; i<arr.length; i++) {
    var mod = arr[i] % 2
    if (mod == 0) {
        cntr++
    }
}

console.log("Cut ededlerin sayi: ", cntr)