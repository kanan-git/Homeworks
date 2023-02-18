var Palindrome = "AbcdeedcbA"
// var Palindrome = "AbcdeedcbAc"
var reversedText = ""

for (var i = Palindrome.length-1; i >= 0; i--) {
    reversedText += Palindrome[i]
}

if (reversedText == Palindrome) {
    console.log(Palindrome, "=", reversedText, "TRUE")
}
else {
    console.log(Palindrome, "x", reversedText, "FALSE")
}