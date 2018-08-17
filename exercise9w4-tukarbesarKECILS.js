function tukarBesarKecil(kalimat) {
  var a=kalimat.split('');
  var result=[];
  for(var i=0; i<kalimat.length; i++){
    if(a[i]===a[i].toLowerCase()){
      result.push(a[i].toUpperCase());
    }
    else if(a[i]===a[i].toUpperCase()){
      result.push(a[i].toLowerCase())
    }
  }
  return result.join('');
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
