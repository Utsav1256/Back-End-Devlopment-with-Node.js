// Assignment
// Handle meeting done
// Create a fn that can reset entire day
let myTodos = {
  meetings: 0,
  meetDone: 0,
  addMeetings: function (num) {
    this.meetings = this.meetings + num;
  },
  addMeetDone: function (num) {
    this.meetDone = this.meetDone + num;
  },
  summary: function () {
    return `You have ${this.meetings - this.meetDone} meetings left today!`;
  },
  reset: function () {
    this.meetings = 0;
    this.meetDone = 0;
  },
};

myTodos.addMeetings(8);
myTodos.addMeetDone(5);
console.log(myTodos.summary());
myTodos.reset();
console.log(myTodos.summary());
