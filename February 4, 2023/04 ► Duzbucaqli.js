var a = +prompt("Eni daxil edin:", "4")
var b = +prompt("Uzunlugu daxil edin:", "5")
var sum = ""
var line = 0
var column = 0

while (line < a) {
    sum += "■"
    line++
}

while (column < b) {
    console.log(sum)
    sum += " "
    column++
}