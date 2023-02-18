// Verilən array sonu 9 bitən ədəd varmi? Varsa True, yoxsa False ekrana cixardin

var arr = [19, 9, 20, 5, 190]
var newArr = []

for (var i=0; i<arr.length; i++) {
    var mod = arr[i] % 10
    if (mod == 9) {
        newArr.push(arr[i])
    }
}

if (newArr.length > 0) {
    console.log(newArr, "TRUE")
}
else {
    console.log(newArr, "FALSE")
}