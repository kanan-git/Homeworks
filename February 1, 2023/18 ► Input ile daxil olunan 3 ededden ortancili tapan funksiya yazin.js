var a = +prompt("I ededi daxil edin")
var b = +prompt("II ededi daxil edin")
var c = +prompt("III ededi daxil edin")

if (a>b && b>c || c>b && b>a) {
    console.log("Ortancil eded: ", b)
}
else if (b>a && a>c || c>a && a>b) {
    console.log("Ortancil eded: ", a)
}
else {
    console.log("Ortancil eded: ", c)
}