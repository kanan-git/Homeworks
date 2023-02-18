// Stringdə olan saitleri ve onlarin sayini tapin

var string = "lorem ipsum sit dolor"
var vowels = ["a", "e", "i", "o", "u"]
var stringVowels = []
var counter = 0

for (var i=0; i<string.length; i++) {
    var cntr = 0
    for (var k=0; k<vowels.length; k++) {
        if (string[i][j] == vowels[k]) {
            cntr++
        }
    }
    if (cntr == 1) {
        stringVowels.push(string[i])
        counter++
    }
}

console.log("Saitler: ", stringVowels)
console.log("Saitlerin sayi: ", counter)