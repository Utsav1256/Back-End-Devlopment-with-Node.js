Numbers = ["one", "two", "three", "four"];
console.log(Numbers);
// operation at starting position
// .shift()
Numbers.shift();
console.log(Numbers);
console.log(Numbers.shift());
console.log(Numbers);

// .unshift()
Numbers.unshift("two");
console.log(Numbers);
console.log(Numbers.unshift("one"));
console.log(Numbers);

// operation at end position
// .pop()
Numbers.pop();
console.log(Numbrs);
console.log(Numbers.pop());
console.log(Numbers);

// .push()
Numbers.push("three");
console.log(Numbers);
console.log(Numbers.push("four"));
console.log(Numbers);

// operation at middle position
// .splice()
Numbers.splice(2, 2, "Something");
Numbers.splice(
  2,
  2,
  "Anything",
  "Anything",
  "Anything",
  "Anything",
  "Anything",
  "Anything"
);
