var x
var y = 100
var z
var sum = 0
for (x = 1; x <= y; x++) {
    let z = x % 2;
    if (z == 0) {
        sum += x;
    }
}
console.log(sum)
var z = 0
for (var bolen = 1; bolen < sum; bolen++) {
    var a = sum % bolen
    if (a == 0) {
        z += bolen
    }
}
console.log(z)
if (z == sum) {
    console.log("Mukemmel ededdir", sum)
}
else {
    console.log("Deyil", sum)
}