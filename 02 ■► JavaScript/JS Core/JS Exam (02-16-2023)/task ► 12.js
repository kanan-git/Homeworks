// Arrayda forla ədədləri 5 vahid artirmaq

var arr = [1, 2, 3, 4, 5]
var newArr = []

for (var i=0; i<arr.length; i++) {
    newArr.push(arr[i] + 5)
}

console.log(newArr)