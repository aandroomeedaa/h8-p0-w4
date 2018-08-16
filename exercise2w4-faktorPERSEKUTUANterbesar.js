function fpb(angka1 ,angka2){
var f1 = []
var f2= []
var fpbr = 0
for (var i=0; i<=angka1;i++){
  if(angka1%i===0){
  f1.push(i)}
//  console.log(f1) }
}
for (var j=0; j<=angka2;j++){
 if(angka2%j===0){
  f2.push(j)
//  console.log(f2)  
}}
for(var k=0;k<f1.length-1;k++){
  for(var l=0;l<f2.length;l++){
    if (f1[k]===f2[l]){
      fpbr=f1[k]
    }
  }
}
return (fpbr)
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
console.log(fpb(14,6))//soal saya bikin sendiri hasilnya 2
