function printRange(x,y,z){
  if ((z >= 0 || z < 0)&&(z >= 0 || z < 0) && (y >=0 || y <0)){
    // better way of checking value

    for (var i =x; i<y; i=i+z){
      console.log(i);
    }
  }
  else if (y === undefined && z === undefined){
    // better way of checking value

    for (var i =0; i<x; i++){
      console.log(i);
    }
  }
  else{
    for (var i =x; i<y; i= i+1){
      console.log(i);
    }
  }
}
// console.log(printRange(10));
// console.log(printRange(2, 10, 2));

// console.log(printRange(-10, -2, 2));
// console.log(printRange(10,2));

// isNaN ();

function printRange(x,y,z){
  if(isNaN(z) && isNaN(y)){
    console.log("Before for loop number three");
    for (var i =0; i<x; i++){
      console.log(i);
    }
  }
  else if (isNaN(z)){
    // NaN not a number
    // isNaN not a value --> z not a value=== true
    console.log("Before for loop number one");
    for (var i =x; i<y; i++){
      console.log(i);
    }
  }
  else{
    console.log("Before for loop number two");
    for (var i =x; i<y; i+=z){
      console.log(i);
    }
  }
}
// console.log(printRange(2,10,2));
console.log(printRange(10));
