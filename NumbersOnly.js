"use strict";

function numbersOnly(arr){
  var newArray =[];
  for (var i=0; i<arr.length; i++){
    if (typeof(arr[i])=== 'number'){
      newArray.push(arr[i]);
    }
  }
  console.log(newArray);
}
console.log(numbersOnly([1,"apple",-3,"orange", 0.5]));


function non_numbers(arr){
  var non_numb_array=[];
  for (var i=0; i<arr.length; i++){
    if(typeof(arr[i]) !== 'number'){
      non_numb_array.push(arr[i]);
    }
  }
  console.log(non_numb_array);
}
console.log(non_numbers([1,"apple",-3,"orange", 0.5]));
