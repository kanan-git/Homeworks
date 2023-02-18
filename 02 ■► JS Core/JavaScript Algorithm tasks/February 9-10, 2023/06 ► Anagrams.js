var firstText = "Hello world"
var secondText = "Hello world"
var counter = 0

// var firstText = "Hello lorem"
// var secondText = "Hello ipsum"

// var firstText = "Hello lorem"
// var secondText = "Hello sit"

// var firstText = "Hello amet world"
// var secondText = "Hello dolor"

var words1 = firstText.split(" ")
var words2 = secondText.split(" ")

for (var i = 0; i < words1.length; i++) {
    var counter = 0
    for (var j = 0; j < words2.length; j++) {
        if (words2[j] == words1[i]) {
            counter++
            if (counter != 1) {
                console.log("Phrases is not same!")
                break
            }
            else {
                console.log("Phrases is same!")
            }
        }
    }
}

for (var i = 0; i < words2.length; i++) {
    var counter = 0
    for (var j = 0; j < words1.length; j++) {
        if (words1[j] == words2[i]) {
            counter++
            if (counter != 1) {
                console.log("Phrases is not same!")
                break
            }
            else {
                console.log("Phrases is same!")
            }
        }
    }
}

if (firstText.length != secondText.length) {
    console.log("First phrase character count: ", firstText.length)
    console.log("Second phrase character count: ", secondText.length)
    console.log("FALSE: ", "Phrase length is not equal!")
}
else {
    console.log("First phrase character count: ", firstText.length)
    console.log("Second phrase character count: ", secondText.length)
    console.log("TRUE: ", "Phrase length is equal!")
}