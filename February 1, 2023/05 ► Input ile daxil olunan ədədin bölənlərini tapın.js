var input = +prompt("Eded daxil edin", "123")
console.log("Ededin bolenleri")

for (var bolen = 1; bolen <= input; bolen++) {
    var z = input % bolen
    if (z==0) {
        console.log(bolen)
    }
}