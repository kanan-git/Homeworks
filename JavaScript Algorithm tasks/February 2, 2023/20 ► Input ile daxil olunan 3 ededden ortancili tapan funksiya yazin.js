var a = +prompt("I ededi daxil edin:", "1")
var b = +prompt("II ededi daxil edin:", "2")
var c = +prompt("III ededi daxil edin:", "3")

console.log("Daxil edilen ededler: ", a, b, c)

if (a>b && b>c || c>b && b>a) {
    console.log("Ortancil eded: ", b)
}
else if (b>a && a>c || c>a && a>b) {
    console.log("Ortancil eded: ", a)
}
else {
    console.log("Ortancil eded: ", c)
}