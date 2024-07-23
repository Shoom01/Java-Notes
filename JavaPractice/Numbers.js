// e5 is ^5 and -e is to the -^5
let a = 123e5;    // 12300000
let b = 123e-5;   // 0.00123

// Integers are accurate up to 15 digits
let j = 999999999999999;   // x will be 999999999999999
let k = 9999999999999999;  // y will be 10000000000000000

// Floating point arithmetic is not not always accurate
let z = 0.2 + 0.1;

// But can be solved by dividing
let x = (0.2 * 10 + 0.1 * 10) / 10;

console.log(a + ", " + b + ", "+  j  + ", " + k + ", " + z + ", " + x )

// Execute until Infinity
let myNumber = 2;
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
  console.log(myNumber)
}

