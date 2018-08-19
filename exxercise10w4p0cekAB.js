
function checkAB(str) {
var array = str.split('')

  for (var i = 0 ; i < array.length ; i++) {
   // console.log(array[i])
  if (array[i]==='a')
  if (array[i+4]==='b')
  return "true"
  
  if (array[i]==='b')
  if (array[i+4]==='a')
  return "true"
}

  return  "false"
}
  

console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
