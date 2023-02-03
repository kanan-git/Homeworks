var input = +prompt("Eded daxil edin", "123")
var counter = 0
var array = []

while (input>0) {
    var digit = input % 10
    var input = Math.trunc(input / 10)
    counter ++
    array.push(digit)
}

console.log("Ededin reqemlerinin sayi: ", counter)
console.log("Ededin tersden reqemleri: ", array)