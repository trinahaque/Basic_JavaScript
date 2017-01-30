function variable_declaration_num(){

    var num1 = 28;
    var num2 = 4.99;
    var num3 = -12;
    var num4 = -22.3;
    console.log("The first number is:", num1);
    console.log("The second number is:", num2);
    console.log("The third number is:", num3);
    console.log("The fourth number is:", num4);
  }
  // console.log(variable_declaration_num());
/*why is it printing undefined every time*/


function variable_declaration_string(){
  {
    var string1 = "Hello";
    var string2 = "Hello World!";
    var string3 = "42";
    var string4 = "";
  }
  console.log("The first string is:", string1);
  console.log("The second string is:", string2);
  console.log("The third string is:", string3);
  console.log("The combined string is:", string1 + string4 + "", string2 + string3);
}
console.log(variable_declaration_string());


function bool_undefined(){
  {
    var bool1 = true;
    var bool2 = false;
    var und = undefined;
  }
  console.log("The first boolean is:", bool1);
  console.log("The second boolean is:", bool2);
  console.log("The number is:", und);
}
// console.log(bool_undefined());
