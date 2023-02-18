// Promptdan n sayda ədəd daxil olacaq daxil olunan ədədlər arasinda ən böyüyü tapin

var n = +prompt("Eded sayi", "5")
var array = []

for (var i=0; i<n; i++) {
    var input = +prompt("Eded daxil edin")
    array.push(input)
}

console.log("Ededler: ", array, " En boyuk ededi: ", Math.max(...array))