// Primitive data
// Number
// String
// Boolean
// undefined
// null
// Symbol
var id = Symbol("id"); // unique

// Function
var myFunction = function () {
  return "Hello JavaScript!";
};

// Object
var mySelf = {
  name: "Hien",
  age: 27,
  address: "Da Nang",
  speak: function () {
    console.log("Nothing to say!");
  },
};

console.log(typeof mySelf.speak);

console.log(typeof null);
