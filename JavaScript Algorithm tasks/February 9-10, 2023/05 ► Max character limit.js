var text = "abcdefghjklmno"
var newText = ""
var limit = +prompt("Enter character limit:", "10")

for (var i = 0; i < limit; i++) {
    newText += text[i]
}

console.log(newText)