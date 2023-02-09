var array = [13, 45, 101, 102, 2299, 99]

for (var i = 0; i < array.length; i++) {
   var eded = ""
   var z = array[i]
   while (array[i] > 0) {
    var mod = array[i] % 10
    array[i] = Math.trunc(array[i] / 10)
    eded += mod
   }
   console.log("Ededler: ", z, "Guzgu ededleri: ", eded)
}