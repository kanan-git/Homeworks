var array = ["abc", "dce", "fgh"]

for (var i = 0; i < array.length; i++) {
    var word = ""
    for (var j = 0; j < array[i].length; j++) {
        if (j == 0) {
            x = array[i][j].toUpperCase()
            word += x
        }
        else {
            word += array[i][j]
        }
    }
    console.log(word)
}