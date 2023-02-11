var firstText = "Hello world"
var secondText = "Hello world"
var counter = 0

// var firstText = "Hello lorem"
// var secondText = "Hello ipsum"

for (var i = 0; i < firstText.length; i++) {
    for (var j = 0; j < secondText.length; j++) {
        if (firstText[i] == secondText[j]) {
            counter++
        }
    }
}

if (firstText.length != secondText.length) {
    console.log("First phrase character count: ", firstText.length)
    console.log("Second phrase character count: ", secondText.length)
    console.log("FALSE: ", "Phrase length is not equal!")
}
else {
    if (counter == firstText.length && counter == secondText.length) {
        console.log("Phrases character counts: ", counter)
        console.log("TRUE: ", "Phrase characters is same.")
    }
    else {
        console.log("FALSE: ", "Phrase characters is not same!")
    }
}