var arr = [1, 10, -5, 3, 191]
var newArr = []
var x = Math.min(...arr)
var y = Math.max(...arr)

for (var k=x; k<=y; k++) {
    for (var i=0; i<arr.length; i++) {
        if (arr[i] == k) {
            newArr.push(k)
        }
    }
}

console.log(newArr)