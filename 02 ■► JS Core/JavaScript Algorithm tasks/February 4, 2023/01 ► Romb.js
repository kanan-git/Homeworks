var n = +prompt("Eded daxil edin", "7")
var previousValue = n
for (var start = 1; start <= n; start++) {
    var mod = start % 2
    if (mod == 1) {
        var line = 1
        var sum = ""
        var m = 0
        var space = (n - start) / 2
        while (m < space) {
            sum += " "
            m++
        }
        while (line <= start) {
            sum += "■"
            line++
        }
        console.log(space, sum)
    }
}
n--
while (n > 0) {
    var mod = n % 2
    if (mod == 1) {
        var sum = ""
        line = n
        var m = 0
        var space = (previousValue - n) / 2
        while (m < space) {
            sum += " "
            m++
        }
        while (line > 0) {
            sum += "■"
            line--
        }
        console.log(space, sum)
    }
    n--
}