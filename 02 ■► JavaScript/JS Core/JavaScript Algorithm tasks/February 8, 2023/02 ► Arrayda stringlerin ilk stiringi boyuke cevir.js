var array = ["abc", "dce", "fgh"]

for (var i = 0; i < array.length; i++) {
    if (i == 0) {
        console.log(array[0].toUpperCase())
    }
    else {
        console.log(array[i])
    }
}