var a = [1,2,3,4,5]
var b = [9,2,3,6,11]
var c = []
var n = 0

while (n < a.length) {
    var m = 0
    while (m < b.length) {
        if (a[n] == b[m]) {
            c.push(b[m])
            console.log(b[m])
        }
        m++
    }
    n++
}

console.log("Ortaq ededler: ", c)