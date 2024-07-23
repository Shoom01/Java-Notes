// Create an Object
const person1 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// Create an Object
const person2 = {
    firstName: "Dohn",
    lastName: "Joe",
    age: 5,
    eyeColor: "red"
  };


// Create an Object
const person3 = {};

// You can also do this for no reason
const person = new Object();


// Add Properties
person.firstName = "Bohn";
person.lastName = "Boe";
person.age = 500;
person.eyeColor = "brown";

// How to acces object properties
person1.lastName;
person1["lastName"];

console.log(person1.lastName)
console.log(person1.firstName + " " + person1.lastName)
