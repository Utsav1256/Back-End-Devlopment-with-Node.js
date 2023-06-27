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

let myMultiplier = function (num1, num2) {
  //   let multiplied = num1 * num2;
  //   return multiplied;
  return num1 * num2;
};
console.log(myMultiplier(3, 5));

// console.log(guestUser);

let guestUser = function (name = "UnName", courseCount = 0) {
  return "Hello " + name + " and your course count is " + courseCount;
};
console.log(guestUser());
console.log(guestUser("Utsav"));
console.log(guestUser(5));
console.log(guestUser(null, 5));
console.log(guestUser("Utsav", 5));
console.log(guestUser("Utsav", null, 5));
