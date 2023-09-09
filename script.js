'use strict';

/* function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1996) {
      var millenial = true;
      // Creating New Variable with same name as outer scope's variable
      const firstName = 'Steven';

      //Reassigning outer scope's variable
      output = 'New Output!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

//variables
const firstName = 'Jonas';
calcAge(1991); */
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

//undefined
var addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//Example

if (!numProducts) {
  deleteShoppigCart();
}

var numProducts = 10;

function deleteShoppigCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
