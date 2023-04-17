var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (var i = 0; i < 10; i++) {
   if (array[i] != i) {
      console.log(i)
      break
   }
}