var text = "lorem ipsum"
// var text = "yza"
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var input = +prompt("Caeser Cipher value:", "1")
var newText = ""

// loop for gathering text's characters
for (var i = 0; i < text.length; i++) {
    // adding space
    if (text[i] == " ") {
        newText += " "
    }
    else {
        // loop for gathering alphabet's characters
        for (var j = 0; j <= alphabet.length; j++) {
            // creating new text with Caeser Chiper
            if (text[i] == alphabet[j]){
                var x = j + input
                // fixing overlapping alphabet issue
                if (x >= 26) {
                    var y = x - 26
                    newText += alphabet[y]
                }
                else {
                    newText += alphabet[x]
                }
            }
        }
    }
}

// console.log("Text: ", text, " After Caeser Chiper: ", newText)
console.log(newText)