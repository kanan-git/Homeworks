// Arrayin içərisindəkiləri kiçikdən böyüyə göstərin

var arr = [-5, 10, 55, 1, 109]
var newArr = []
var min = Math.min(...arr)
var max = Math.max(...arr)

for (var j=min; j<=max; j++) {
    for (var i=0; i<arr.length; i++) {
        if (arr[i] == j) {
            newArr.push(arr[i])
        }
    }
}

console.log(newArr)