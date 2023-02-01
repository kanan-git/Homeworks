var input = +prompt("Eded daxil edin", "123")
var counter = 0

for (var bolen = 1; bolen <= input; bolen++) {
    var z = input % bolen;
    if (z == 0) {
        counter++;
    }
}

if (counter <= 2) {
    console.log("Daxil edilen eded sade ededdir", input)
}
else {
    console.log("Daxil edilen eded murekkeb ededdir", input)
}