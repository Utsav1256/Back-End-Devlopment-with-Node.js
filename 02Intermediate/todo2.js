let myTodos = {
  day: "Monday",
  meetings: 0,
  meetDone: 0,
};

let addMeeting = function (todo, meet = 0) {
  todo.meetings = todo.meetings + meet;
};

let meetDone = function (todo, meet = 0) {
  todo.meetDone = todo.meetDone + meet;
};

let reset = function (todo) {
  todo.meetings = 0;
  todo.meetDone = 0;
};

let getSummaryOfDay = function (todo) {
  let meetLeft = todo.meetings - todo.meetDone;
  return `You have ${meetLeft} meetings today!`;
};

addMeeting(myTodos, 4);
// you are not passing a copy of the object here,
// you are actually passing the object itself.
// so what are the changes you are going to be making,
// it's going to be done in the actual object itself.

addMeeting(myTodos, 2);
meetDone(myTodos, 4);
console.log(myTodos);
console.log(getSummaryOfDay(myTodos));
