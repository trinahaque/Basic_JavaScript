function while_you_wait(){

  var daysUntilMyBirthday = 4;

  while (daysUntilMyBirthday > 30){
    console.log(daysUntilMyBirthday + " days until my birthday. Such a long time.... :(" )
    daysUntilMyBirthday--;
  }

  for (var daysUntilMyBirthday = daysUntilMyBirthday; daysUntilMyBirthday>5; daysUntilMyBirthday--){
    console.log(daysUntilMyBirthday + " days until my birthday. I am really excited!!")
  }

  while (daysUntilMyBirthday > 2){
    console.log(daysUntilMyBirthday + " days until my birthday. I am going to scream :)" )
    daysUntilMyBirthday--;
  }

  for (daysUntilMyBirthday = daysUntilMyBirthday; daysUntilMyBirthday>0; daysUntilMyBirthday--){
    if (daysUntilMyBirthday === 2){
      console.log(daysUntilMyBirthday + " days until my birthday!!")
    }
    else{
        console.log(daysUntilMyBirthday + " day until my birthday!!")
    }
  }

  if (daysUntilMyBirthday==0){
    console.log("It's my birthday!!!!")
  }

}
console.log(while_you_wait());
