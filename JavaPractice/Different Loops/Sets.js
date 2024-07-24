// Create a Set
const letters1 = new Set(["a","b","c"]);


// Create a Set
const letters2 = new Set();

// Add Values to the Set
letters2.add("a");
letters2.add("b");
letters2.add("c");


// List all Elements
let text = "";
for (const x of letters1) {
  text = x;
  console.log(text)
}


typeof letters1;      // Returns object
letters1 instanceof Set;  // Returns true
