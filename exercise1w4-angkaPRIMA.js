function angkaPrima(angka) {
  var stat = ''
  var abs = 0
 for(var i = 0 ; i<=angka ;i++){

   if (angka%i==0){
          abs = abs + 1
   } 
      
 }
 if (abs > 2){
   stat = stat + 'bukan Prima'
 }
 else {
   stat= stat + 'Prima'
 }
return (stat)
 
 }
 

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
