function changeMe(arr) {
  for(i = 0; i < arr.length; i++){
    var ob = {};
    ob.firstName = arr[i][0];
    ob.lastName = arr[i][1];
    ob.gender = arr[i][2];
    if(arr[i][3] === undefined){
      ob.age = 'Invalid Birth Year';
    }else{
      ob.age = 2018-arr[i][3];
    }
    console.log(ob)
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
