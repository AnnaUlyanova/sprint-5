//Exercise #1 Looping a triangle

var symbol = "#";
while (symbol.length <= 7) {
  console.log(symbol);
  symbol = symbol + "#";
}

//Exercise #2 FizzBuzz

for (i=1; i<= 100; i++) {
  if ( i % 3 === 0 && i % 5 === 0 ) {
  console.log("FizzBuzz");
  }
  else if (i % 5 === 0) {
  console.log("Buzz");
  }
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
 else {
   console.log(i);
 }
}

//Exercise #3 Chess board
// Your code here.
var firstSymbol = " ";
var secondSymbol = "#";

var size = Number(prompt("What grid size would you like?", "2"));

if (isNaN(size)) {
alert("You didn't give me a number :(")
}
else {
var firstLine = (firstSymbol + secondSymbol).repeat(size/2);
var secondLine = (secondSymbol + firstSymbol).repeat(size/2);
var grid = (firstLine + "\n" + secondLine + "\n").repeat(size/2);
}
console.log(grid);
