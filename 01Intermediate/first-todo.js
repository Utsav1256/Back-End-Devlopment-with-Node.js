const myTodo = [];

// from bottom
myTodo.push("Buy Mercedes");
myTodo.push("Bath");
myTodo.push("Lunch");

myTodo.forEach(function (todo, index) {
  console.log(`Task no. ${index + 1} -> ${todo}`);
});

console.log("------------------");

const Todo = [];

// from top
Todo.unshift("Buy tesla");
Todo.unshift("Lunch");
Todo.unshift("Bath");

Todo.forEach(function (task, index) {
  console.log(`Task no. ${index + 1} -> ${task}`);
});

console.log("------------------");

//Using for loop
const doThis = [];

doThis.unshift("Repeat");
doThis.unshift("Sleep");
doThis.unshift("Code");
doThis.unshift("Eat");
doThis.unshift("Bath");

for (let i = 0; i < doThis.length; i++) {
  console.log(`Task no. ${i + 1} -> ${doThis[i]}`);
}
