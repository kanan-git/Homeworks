var array = [1, 2, 3, 4, 5, 6, 7, 8]
var sum = 0

for (var i = 0; i < array.length; i++) {
   sum += array [i]
}

var mod = sum % 2

if (mod == 0) {
   console.log("True", sum)
}
else {
   console.log("False", sum)
}