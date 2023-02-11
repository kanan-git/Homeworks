var array = ["ABC", "Abc", "ABcD", "ABCD", "A"]

function isUpperCase(i) {
    for (var i = 0; i < array.length; i++) {
        x = array[i].toUpperCase()
        if (x == array[i]) {
            console.log("True: ", array[i])
        }
        else {
            console.log("False: ", array[i])
        }
    }
    return i
}

isUpperCase(i)