var arr = ["Lorem", "ipsum"]
var reversedArr = []

for (var i = 0; i < arr.length; i++) {
    reversedArr.unshift(arr[i])
}

console.log(reversedArr)