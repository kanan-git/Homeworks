var reqem = 1
var hasil = 1

while (reqem < 11) {
    for (var vuruq = 1; vuruq < 11; vuruq++) {
        hasil = reqem * vuruq
        console.log(reqem, "*", vuruq, "=", hasil)
    }
    reqem++
    console.log("------------------------")
}