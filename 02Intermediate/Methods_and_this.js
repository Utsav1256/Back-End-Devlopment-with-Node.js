// Methods and this keyword in JavaScript
// let myTodos = {
//   day: "Monday",
//   meetings: 0,
//   meetDone: 0,

//   addMeeting: function () { // a function inside an object is called as method.
//     // console.log("Heyy!, I AM A FUNCTION");
//     console.log(this); // this is here refrencing the whole object with properties
//   },
// };

let myTodos = {
  day: "Monday",
  meetings: 0,
  meetDone: 0,

  addMeeting: function (num) {
    // meetings = meetings + num; .. meetins is not defined here(inside {}), we need to use this keyword
    this.meetings = this.meetings + num;
  },
  summary: function () {
    return `You have ${this.meetings} meetings today!`;
  },
};

myTodos.addMeeting(4);
// it is similar to console.log() :)

console.log(myTodos.summary());
