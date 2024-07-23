const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
// Deletes age
  delete person.age;

// Assigns nationality
  person.nationality = "English";

console.log(person.nationality)
console.log(person.age)

// Example of a nested object
myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }