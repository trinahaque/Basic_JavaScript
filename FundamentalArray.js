// function greetSomeone(joke){
"use strict";
function tellMeJoke(){
  var joke = "Have you heard anything?";
  joke = joke + "....They are making headlines!";
  return joke;
}
// console.log(tellMeJoke());

function fancy_array(arr, symbol, reversed){
  if (isNaN(reversed)){
    // reversed is not value = true
    for (var i =0; i<arr.length; i++){
      console.log(i + symbol + arr[i]);
    }
  }
  else{
    for (var i =arr.length-1; i>=0; i--){
      console.log(i + symbol + arr[i]);
    }
  }
}
console.log(fancy_array(["James", "Jill", "Jane", "Jack"], "==>", true));
