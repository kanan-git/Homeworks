// Array içerisində 0-9 kimi rəqəmlər var,1 catmir onu tapin

var digits = [0, 1, 2, 3, 4, 6, 7, 8, 9]

for (var i=0; i<digits.length; i++) {
    if (digits[i] != i) {
        console.log("Eksik olan eded: ", i)
        break
    }
}