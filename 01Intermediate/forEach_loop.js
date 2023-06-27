const days = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
console.log(days[0]);

let sayHello = function (name) {
  console.log(`Greeting message for ${name} Ji`);
};
days.forEach(sayHello);
console.log("-------------------------------");

days.forEach(function (name) {
  console.log(`Greeting message for ${name} Ji`);
});
console.log("-------------------------------");

days.forEach(function (day) {
  console.log(day);
});
console.log("-------------------------------");

days.forEach(function (tiger) {
  console.log(tiger);
});
console.log("-------------------------------");

days.forEach(function (day, index) {
  console.log(`Starts with ${index + 1} -- ${day}`);
});
console.log("-------------------------------");

days.forEach(function (index, day) {
  console.log(`Starts with ${index + 1} -- ${day}`);
});
