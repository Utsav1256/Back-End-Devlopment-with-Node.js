// let grade = function (currentMarks, totalMarks) {
//   let percentage = (currentMarks / totalMarks) * 100;
//   if (percentage >= 90) {
//     console.log("Grade - A");
//   } else if (percentage >= 80) {
//     console.log("Grade - B");
//   } else if (percentage >= 70) {
//     console.log("Grade - C");
//   } else if (percentage >= 60) {
//     console.log("Grade - D");
//   } else if (percentage >= 50) {
//     console.log("Grade - E");
//   } else {
//     console.log("Grade - F");
//   }
// };

// let Grade = grade(41, 100);

let grade = function (currentMarks, totalMarks) {
  let percentage = (currentMarks / totalMarks) * 100;
  let myGrade = "";
  if (percentage >= 90) {
    myGrade = "A";
  } else if (percentage >= 80) {
    myGrade = "B";
  } else if (percentage >= 70) {
    myGrade = "C";
  } else if (percentage >= 60) {
    myGrade = "D";
  } else if (percentage >= 50) {
    myGrade = "E";
  } else {
    myGrade = "F";
  }
  return `Your Grade is ${myGrade}`;
};

let Grade = grade(41, 100);
console.log(Grade);
