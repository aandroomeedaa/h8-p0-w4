function ubahHuruf(kata) {
 var lib = 'abcdefghijklmnopqrstuvwxyz';
 var tampung = [];
 for (var i = 0 ; i< kata.length ;i+=1 ){
   tampung.push(lib[lib.indexOf(kata[i])+1]);

  }
 return tampung.join('');
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
