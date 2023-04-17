// Verilən cümlədə bütün sözlerin baş hərfini böyüdün

var text = "lorem impsum sit dolor"
var arr = text.split(" ")
var newText = ""

for (var j=0; j<arr.length; j++) {
    var word = ""
    for (var i=0; i<arr[j].length; i++) {
        if (i == 0) {
            word += arr[j][i].toUpperCase()
        }
        else {
            word += arr[j][i]
        }
    }
    newText += word
    newText += " "
}

console.log(newText)