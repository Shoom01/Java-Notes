// One use of comparison operators is as follows
age1 = 15
age2 = 19
age3 = "17"

if (age1 < 18) text = "Too young to buy alchohol";

let voteable = (age2 < 18) ? "Too young":"Old enough";

// Converts a string to a number before it goes through the code
age3 = Number(age3);
if (isNaN(age3)) {
  voteable = "Input is not a number";
} else {
  voteable = (age3 < 18) ? "Too young" : "Old enough";
}

console.log(voteable)

// Returns first argument unless is is null of undefined
let name1 = null;
let text1 = "missing";
let result = name1 ?? text;

console.log(result)