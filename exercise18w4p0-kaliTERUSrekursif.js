function kaliTerusRekursif(angka) {
    var strAng = angka.toString();
    var arrAng = [];
    var resCalc = [];
    var res = Number(strAng[strAng.length-1]);
    
    for (var i=0; i<strAng.length; i++) {
        arrAng.push(+strAng.charAt(i));
    }
    
    
    if (arrAng.length === 1) {
        return Number(arrAng);
    } else {
        var newAngka = arrAng.slice(0, arrAng.length-1);
        var angkaToString = newAngka.toString();
        var newAngkaString = '';
        
        for (var j=0; j<angkaToString.length; j++) {
            if (angkaToString[j] === ',') {
            } else {
                newAngkaString = newAngkaString + angkaToString[j];
            }
        }
        
        var calc = res * kaliTerusRekursif(newAngkaString);
        
        if (calc >= 10) {
            return kaliTerusRekursif(calc);
        } else {
            return calc;
        }
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
