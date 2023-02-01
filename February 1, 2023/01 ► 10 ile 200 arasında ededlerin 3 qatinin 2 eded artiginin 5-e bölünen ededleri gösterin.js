var x
var y = 200
console.log("10 ile 200 araasindaki (3x+2)/5 sertini odeyen ededler")

for (var x = 10; x < y; x++) {
    var z = (x * 3 + 2) % 5;
    if (z==0) {
        console.log(x)
    };
}