var alphabet = "abcdefghijklmnopqrstuvwxyz"
var text = "Lorem Ipsum"
var newText = ""
var input = +prompt("Caeser Cipher value:", "1")

for (var i = 0; i < text.length; i++) {
    for (var j = 0; j < alphabet.length; j++) {
        if (text[i] == alphabet[j]) {
            j += input
            newText += alphabet[j]
        }
    }
}

console.log(newText)