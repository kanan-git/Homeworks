// n = 7
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7

var input = +prompt("Eded daxil edin", "7")
var result = ""

for (var i=1; i<=input; i++) {
    result += i + " "
    console.log(result)
}