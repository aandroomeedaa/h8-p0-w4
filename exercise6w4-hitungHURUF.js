function hitungHuruf(kata) {
 
  var kata_array = kata.match(/[a-z]+/gi);
  var index_kata_berulang;
  var terbanyak = 0;
  var jumlah_huruf_berulang = 0;
  for (var i = 0; i < kata_array.length; i++) {
    var map = {};
    jumlah_huruf_berulang = 0;
    
    for (var k = 0; k < kata_array[i].length; k++) {
        map[kata_array[i][k]] = 0;
      }
       for (var j = 0; j < kata_array[i].length; j++) {
      map[kata_array[i][j]]++;
          if (map[kata_array[i][j]] >= 2) {
        jumlah_huruf_berulang++;
      }
    }
    if (jumlah_huruf_berulang > terbanyak) {
      terbanyak = jumlah_huruf_berulang;
      index_kata_berulang = kata_array[i];
    }
  }
  return index_kata_berulang;
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
