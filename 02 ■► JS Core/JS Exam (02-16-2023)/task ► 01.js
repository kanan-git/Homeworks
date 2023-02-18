// Prompdan daxil olan ədədin faktorialini tapin

var input = +prompt("Eded daxil edin", "11")
var multi = 1

for (var i=1; i<=input; i++) {
    multi *= i
}

console.log(multi)