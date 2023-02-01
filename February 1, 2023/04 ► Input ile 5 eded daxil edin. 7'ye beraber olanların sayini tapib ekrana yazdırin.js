var n = +prompt('Daxil edilecek ededlerin sayi', '5')

for(var counter = 1; counter <= n; counter++) {
    var i = +prompt('Eded daxil edin', '123');
    z = i % 7;
    if (z == 0) {
        console.log('7-ye bolunen ededler', i);
    }
}