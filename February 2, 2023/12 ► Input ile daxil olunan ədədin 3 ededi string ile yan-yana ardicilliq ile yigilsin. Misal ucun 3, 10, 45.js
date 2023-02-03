var ededler = []
var a = +prompt("I ededi daxil edin:", "1")
var b = +prompt("II ededi daxil edin:", "2")
var c = +prompt("III ededi daxil edin:", "3")

if (a < b && b < c) {
    ededler.push(a)
    ededler.push(b)
    ededler.push(c)
}
else if (a < c && c < b) {
    ededler.push(a)
    ededler.push(c)
    ededler.push(b)
}
else if (c < b && b < a) {
    ededler.push(c)
    ededler.push(b)
    ededler.push(a)
}
else if (c < a && a < b) {
    ededler.push(c)
    ededler.push(a)
    ededler.push(b)
}
else if (b < a && a < c) {
    ededler.push(b)
    ededler.push(a)
    ededler.push(c)
}
else {
    ededler.push(b)
    ededler.push(c)
    ededler.push(a)
}

console.log(ededler)