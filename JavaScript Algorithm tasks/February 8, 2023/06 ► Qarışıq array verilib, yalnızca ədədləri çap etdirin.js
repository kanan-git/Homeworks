var array = [123, 10, "1C", "O", 5, "1"]

for (var i = 0; i < array.length; i++) {
    var x = typeof array[i]
    // console.log(x, array [i])
    if (x === "number") {
        console.log("Numbers: ", array[i])
    }
}