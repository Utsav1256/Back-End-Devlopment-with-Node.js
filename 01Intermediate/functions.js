console.log(sayHello);

var sayHello = function (name) {
  console.log(`Greeting message for ${name} Ji`);
  console.log(`Jai Shree ${name}`);
};

console.log(sayHello);
console.log(sayHello());
console.log(sayHello("Ram"));
sayHello("Ram");

let fullNameMaker = function (firstname, secondname) {
  console.log("Welcome to UI");
  console.log(`Happy to have you, ${firstname} ${secondname}`);
};
fullNameMaker("Hanuman", "Ji");

let myAdder = function (num1, num2) {
  let added = num1 + num2;
  return added;
};
console.log(myAdder(3, 5));
