let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = string.length;
let char = string.charCodeAt(0);
// Does same as above
// let char = text[0];
let letter = string.charAt(0);

let all = (string + ", " + length + ", " + char + ", " + letter)
console.log(all)


// Other way to string text together
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;
console.log(text)



let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total)