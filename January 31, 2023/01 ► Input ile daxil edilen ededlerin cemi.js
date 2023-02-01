var result = 0
var n = +prompt('Daxil edilecek ededlerin sayi', '1')

for(var counter = 1; counter <= n; counter++) {
    var i = +prompt('Eded daxil edin', '123');
    result += i;
}

console.log(result)