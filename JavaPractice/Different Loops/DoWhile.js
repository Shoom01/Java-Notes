let i = 0;
let text = "";

do {
    text = "The number is " + i;
    i++;
    console.log(text)
    // Skipper break and continue part
    if (i == 6) {
        break
    }
  }
  while (i < 10);