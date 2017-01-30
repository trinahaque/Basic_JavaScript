"use strict";
// Math.random() * (max - min + 1)) + min;
// getting a random value between certain range
function random_chance(){

  var quarter_number = Math.floor((Math.random()*(25-10 + 1)) + 10);
// # of quarter in hand
// console.log(quarter_number);

//   var coin_win = Math.floor(Math.random()*(100-50+1)+50);
// number of quarter win



  // while (quarter_number > 0){
  if (Math.floor(Math.random()*(100-1 + 1))=== 62){
    quarte_number += Math.floor(Math.random()*(100-50+1)+50);
    quarter_number --;
  }

  else{
    quarter_number --;
  }

  return quarter_number;
}

console.log(random_chance());
// console.log(Math.floor((Math.random()*(100-1 + 1)) + 1));

/*console.log(quarter_number);
console.log(coin_win);*/
