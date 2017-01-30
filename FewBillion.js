function few_billion(){
  var total = .01;
  // console.log("The total on day 1 is", total);

  for(var day = 1; day <30; day++){
    total = total * 2;
    // console.log("The total on day", day+1, "is", total);
  }
  console.log("The amount after 30 day is:", total);
}
console.log(few_billion());


function target_amount(){
  var total = .01;
  var target = Infinity;
  var day = 1;

  while (total<target){
    total = total * 2;
    // console.log("It takes", day+1, "days", "to reach", total);
    day++;
  }
  console.log("It takes", day+1, "days", "to reach", total);
}
console.log(target_amount());
