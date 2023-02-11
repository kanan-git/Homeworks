var arr = ["azerbaijan", "turkey", "united states", "italy", "ukraine"]
var fixedArr = []

for (var i = 0; i < arr.length; i++) {
    var words = ""
    for (var j = 0; j < arr[i].length; j++) {
        if (j == 0) {
            words += arr[i][j].toUpperCase()
        }
        else if (arr[i][j-1] == " ") {
            words += arr[i][j].toUpperCase()
        }
        else {
            words += arr[i][j]
        }
    }
    fixedArr.push(words)
}

console.log(fixedArr)