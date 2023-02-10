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