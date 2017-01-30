function tell_time(){
  var hour = 7;
  var minute = 30;
  var period = "AM";
  // if (var minute < 30 && var period === "AM"){
  if (minute < 30 && period ==="AM"){
    console.log("It's just after", hour, "in the morning");
  }

  else if (minute < 30 && period ==="PM"){
    console.log("It's just after", hour, "in the evening");
  }

  else if (minute >= 30 && period ==="AM"){
    console.log("It's almost", hour+1, "in the morning");
  }

  else{
    console.log("It's just before", hour+1, "in the evening");
  }
}
console.log(tell_time());
