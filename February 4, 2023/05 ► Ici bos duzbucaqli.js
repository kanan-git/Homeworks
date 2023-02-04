var a = +prompt("Eni daxil edin:", "4")
var b = +prompt("Uzunlugu daxil edin:", "5")
var sum = ""
var v = ""
var line = 0
var column = 0

while (line < a) {
    sum += "■"
    line++
}

var line = 0
v += "■"
while (line+1 < a-1) {
    v += " "
    line++
}
v += "■"

console.log(sum)
while (column+1 < b-1) {
    console.log(v)
    v += " "
    column++
}
console.log(sum)