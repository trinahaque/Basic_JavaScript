"use strict";
var students = [
    {first_name: 'Michael', last_name: 'Jordan'},
    {first_name: 'John', last_name: 'Rosales'},
    {first_name: 'Mark', last_name: 'Guillen'},
    {first_name: 'KB', last_name: 'Tonel'},
 ]

 for (var i =0; i<students.length; i++){
   console.log((students[i].first_name + " " + students[i].last_name).replace(/^"?(.+?)"?$/,'$1'));
 }

 var users = {
  'students' : [
    {first_name: 'Michael', last_name: 'Jordan'},
    {first_name: 'John', last_name: 'Dan'},
    {first_name: 'Michael', last_name: 'Jordan'},
    {first_name: 'Michael', last_name: 'Jordan'}
  ],
  'instructors': [
    {first_name: 'Michael', last_name: 'Choi'},
    {first_name: 'Michael', last_name: 'Jordan'},
  ]
}
/*
  users.students[0].jersey = 13;
  users.students[1].jersey = 11;
  users.students[2].jersey = 11;
  users.students[3].jersey = 7;
*/

console.log('Students');
for (var i = 0; i < users.students.length; i++){
  var len = users.students[i].first_name.length + users.students[i].last_name.length;
  console.log(i+1 + "-" + users.students[i].first_name + users.students[i].last_name + "-" + len);
}


console.log('Instructors');
for (var i = 0; i < users.instructors.length; i++){
  var len = users.instructors[i].first_name.length + users.instructors[i].last_name.length;
  console.log(i+1 + "-"+ users.instructors[i].first_name + users.instructors[i].last_name + "-" + len);
}

// look up how to pull from an object
