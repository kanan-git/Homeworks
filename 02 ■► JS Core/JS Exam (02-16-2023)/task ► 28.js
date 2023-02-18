// "Hello my friend. How are you ?"
// en cox istifade olunan herf(ler)i goster

var text = "Hello my friend. How are you ?"
var alphabeth = "abcdefghijklmnopqrstuvwxyz"
var counts = []
var letters = []

text = text.toLowerCase()

for (var i=0; i<alphabeth.length; i++) {
    var counter = 0
    for (var j=0; j<text.length; j++) {
        if (text[j] == alphabeth[i]) {
            counter++
        }
    }
    counts.push(counter)
    letters.push(text[i])
}

var x = counts.indexOf(Math.max(...counts))

console.log (letters[x])