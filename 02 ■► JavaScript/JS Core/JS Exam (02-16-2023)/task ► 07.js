// Verilən ədəddən sonraki ilk sade ədədi tapin

var input = +prompt("Eded daxil edin", "10")
input += 1

while (input >= 0) {
    var bolenlerinSayi = 0
    for (var bolen=1; bolen<=input; bolen++) {
        var mod = input % bolen
        if (mod == 0) {
            bolenlerinSayi++
        }
    }
    if (bolenlerinSayi <= 2) {
        console.log("Ilk sade eded: ", input)
        break
    }
    input += 1
}