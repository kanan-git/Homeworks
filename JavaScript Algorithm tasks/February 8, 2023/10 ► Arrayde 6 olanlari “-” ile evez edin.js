var arr = [666, 16, 20, 1036, 60]
var newArr = []

for (var i = 0; i < arr.length; i++) {
    var numbers = ""
    while (arr[i] > 0) {
        var mod = arr[i] % 10
        if (mod == 6) {
            numbers += "-"
        }
        else {
            numbers += mod
        }
        arr[i] = Math.trunc(arr[i] / 10)
    }
    var x = ""
    for (var j = numbers.length-1; j >= 0; j--) {
        x += numbers[j]
    }
    newArr.push(x)
}

console.log(newArr)