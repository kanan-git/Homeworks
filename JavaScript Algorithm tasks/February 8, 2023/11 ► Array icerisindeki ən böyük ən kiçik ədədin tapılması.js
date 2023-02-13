// var numbers = [666, 16, 20, 1036, 60]

// minValue = (i) => {
//     for (var k = 0; k <= numbers[i]; k++) {
//         for (var i = 0; i < numbers.length; i++) {
//             if (k == numbers[i]) {
//                 var x = k
//                 break
//             }
//         }
//         console.log("En kicik eded: ", x)
//         return i
//     }
// }

// minValue(i)

// maxValue = (j) => {
//     for (var k = 0; k <= numbers[j]; k++) {
//         for (var j = 0; j < numbers.length; j++) {
//             if (k == numbers[j]) {
//                 var y = k
//             }
//         }
//         console.log("En boyuk eded: ", y)
//         return j
//     }
// }

// maxValue(j)

// ◄ ———————————————————————————————————————————————————— ►

// var numbers = [666, 16, 20, 1036, 60]
// var x = 0

// for (var i = 0; i < numbers.length; i++) {
//     if (x > 0 && x < number[i]) {
//         x = number[i]
//     }
// }

// console.log(x)

// ◄ ———————————————————————————————————————————————————— ►

var numbers = [666, 16, 20, 1036, 60]
console.log("En kicik eded: ", Math.min(...numbers), " En boyuk eded: ", Math.max(...numbers))