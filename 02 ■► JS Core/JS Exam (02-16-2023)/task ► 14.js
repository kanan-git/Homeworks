// a = 4, b = 5
// * * * *
// *     *
// *     *
// *     *
// * * * *

var width = +prompt("Enter width", "4")
var height = +prompt("Enter height", "5")

var block = "■"
var space = " "
var spaceBlock = ""
spaceBlock += block
var j = 0
while (j <= width - 3) {
    spaceBlock += " "
    j++
}
spaceBlock += block

for (var i=1; i<=height; i++) {
    if (i == 1 || i == height) {
        console.log(block.repeat(width))
    }
    else {
        spaceBlock += " "
        console.log(spaceBlock)
    }
}