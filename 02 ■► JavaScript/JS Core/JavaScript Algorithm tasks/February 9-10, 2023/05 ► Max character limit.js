// var text = "abcdefghjklmno"
// var newText = ""
// var limit = +prompt("Enter character limit:", "10")
// for (var i = 0; i < limit; i++) {
//     newText += text[i]
// }
// console.log(newText)
// ◄—————————————————————————————————————————————————————►
var text = "Lorem Ipsum Dolor Sit Amet"
var charaCountsArr = []
var charaCountsWithLetters = []

text = text.toLowerCase()

for (var i=0; i<text.length; i++) {
    var counter = 0
    var letter = ""
    for (var j=0; j<text.length; j++) {
        if (text[j] == text[i]) {
            counter++
        }
    }
    charaCountsArr.push(counter)
    if (text[i] == " ") {
        var t = "space"
        letter += t + counter
    }
    else {
        letter += text[i] + counter
    }
    charaCountsWithLetters.push(letter)
}

var k = Math.max(...charaCountsArr)

// console.log(charaCountsArr)
// console.log(charaCountsWithLetters)
// console.log(k)

for (var x=0; x<charaCountsArr.length; x++) {
    if (charaCountsArr[x] == k) {
        console.log(charaCountsWithLetters[x])
        // break
    }
}