// UserName and Password checking basics in JavaScript
let userEmail = "utsav12";
let password = "12345";

// Read Documentation
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// console.log(password.length);
// console.log(userEmail.toLowerCase());
// console.log(userEmail.toUpperCase());
// console.log(userEmail.trim()); -> it is used to remove spaces "  hello " -> "hello" ;)

let userChecker = function (myString) {
  if (myString.includes(12) && myString.length > 6) {
    return true;
  } else {
    return false;
  }
};

console.log(userChecker(userEmail));

let passWordChecker = function (password) {
  if (password.includes(1234) && password.length > 4) {
    return true;
  } else {
    return false;
  }
};

console.log(passWordChecker(password));
