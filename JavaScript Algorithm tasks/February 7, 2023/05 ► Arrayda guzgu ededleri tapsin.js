var array = [15, 108, 72]

for (var i = 0; i < array.length; i++) {
   var eded = ""
   for (var j = array[i].length-1; j > 0; j--) {
       eded += array[i][j]
   }
}