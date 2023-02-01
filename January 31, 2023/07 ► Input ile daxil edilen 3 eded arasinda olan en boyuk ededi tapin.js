var a = +prompt("I ededi daxil edin", "123")
var b = +prompt("II ededi daxil edin", "123")
var c = +prompt("III ededi daxil edin", "123")

if(a>b && a>c) {
    console.log("Daxil edilen en boyuk eded: ", a)
}
else if(b>a && b>c) {
    console.log("Daxil edilen en boyuk eded: ", b)
}
else {
    console.log("Daxil edilen en boyuk eded: ", c)
}