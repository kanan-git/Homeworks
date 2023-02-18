var arr = ["Azerbaijan", "United States of America", "Turkey", "DenmarkButNotCodersGroup"]
var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

for (var i = 0; i < arr.length; i++) {
    var counter = 0
    for (var j = 0; j < arr[i].length-1; j++) {
        for (var k = 0; k < vowels.length; k++) {
            if (arr[i][j] == vowels[k]) {
                counter++
            }
        }
    }
    console.log("Word: ", arr[i], ", ", "Vowels count: ", counter)
}

// TEKRAR