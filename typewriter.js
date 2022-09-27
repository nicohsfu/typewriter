const sentence = "hello there from lighthouse labs";

// don't put this inside the loop cause we'd be resetting to 0 every loop in that case
let timer = 0;

for (const char of sentence) {

  setTimeout(() => {
    process.stdout.write(char);
  }, timer += 50); // <= 50ms delay to make it noticeable

}

setTimeout(() => {
  process.stdout.write("\n"); // newline
}, timer); // the newline gets written at the same time as the last char is written