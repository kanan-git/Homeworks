var input = prompt("Eded daxil edin", "123");

// ededin bolenleri
for (var bolen = 1; bolen <= input; bolen++) {
  var qaliq = input % bolen;
  if (qaliq == 0) {
    // bolenin bolenleri
    var counter = 0;
    for (var divider = 1; divider <= bolen; divider++) {
    var mod = bolen % divider;
    if (mod == 0) {
        counter++;
    }
    }
    if (counter <= 2) {
    console.log("Sade bolenler: ", bolen);
    }
  }
}