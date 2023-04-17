var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
var newArray = []
var input = +prompt("Enter a value for chunking:", "9")

for (i = 0; i < input; i++) {
    newArray.push(array[i])
}
for (i = 0; i < input; i++) {
    array.shift(array[i])
}

console.log(newArray, array)