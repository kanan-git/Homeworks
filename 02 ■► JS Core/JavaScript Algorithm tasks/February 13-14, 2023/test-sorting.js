// testing a sorting algorithm

var array = [100, -10, 9, 0, 17, -1, 2108, 2023, 9, 8]
var positiveArray = [] // array for positive values
var negativeArray = [] // array for negative values
var fixedPositiveArray = [] // array for sorted positive values | final array
var fixedNegativeArray = [] // array for sorted negative values

// ———→ separating negative elements for min & max values of next loops ←———
for (var k=0; k<array.length; k++) {
    if (array[k] >= 0) {
        positiveArray.push(array[k])
    }
    else {
        negativeArray.push(array[k])
    }
}

// ———→ loop for sorting positive values ←———
for (var x=0; x>=0; x++) {
    for (var i=0; i<positiveArray.length; i++) {
        if (positiveArray[i] == x) {
            fixedPositiveArray.push(positiveArray[i])
        }
    }
    if (fixedPositiveArray.length == positiveArray.length) {
        break
    }
}

// ———→ loop for sorting negative values ←———
for (var y=-1; y<0; y--) {
    for (var j=0; j<negativeArray.length; j++) {
        if (negativeArray[j] == y) {
            fixedNegativeArray.push(negativeArray[j])
        }
    }
    if (fixedNegativeArray.length == negativeArray.length) {
        break
    }
}

// ———→ final loop for combine negative & positive values in same array ←———
for (var z=0; z<fixedNegativeArray.length; z++) {
    fixedPositiveArray.unshift(fixedNegativeArray[z])
}

console.log(fixedPositiveArray)