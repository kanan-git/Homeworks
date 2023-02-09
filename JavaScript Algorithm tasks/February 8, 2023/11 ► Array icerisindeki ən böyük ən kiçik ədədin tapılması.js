var arr = [666, 16, 20, 1036, 60]
var i = 0
var x = 0

while (x < arr[i]) {
    while (i < arr.length) {
        if (x == arr[i]) {
            console.log("En kicik eded: ", arr[i])
        }
        i++
    }
    x++
}