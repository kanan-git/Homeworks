// testing bubble sorting algorithm | copied from video for educational purposes (0___0)

const array = [100, -10, 9, 0, 17, -1, 2108, 2023, 9, 8]

function bubbleSort(arr) {
    let isSwapped, temp
    do {
        isSwapped = false
        for (let i=0; i<arr.length; i++) {

            // console.log(isSwapped, arr)

            if (arr[i] > arr[i+1]) {
                temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                isSwapped = true
            }
        }
    }
    while (isSwapped) {}
}

// console.log(bubbleSort(array))

bubbleSort(array)
console.log(array)