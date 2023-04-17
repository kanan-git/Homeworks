// Daxil olunan  stiringin ilk hərfini böyüyə çevir

var input = prompt("Metn daxil edin")
var newText = ""

for (var i=0; i<input.length; i++) {
    if (i == 0) {
        newText += input[i].toUpperCase()
    }
    else {
        newText += input[i]
    }
}

console.log(newText)