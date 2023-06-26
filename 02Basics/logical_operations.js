// && - AND oerator = Both sides need to be true
// || - OR operation - one side need to be true

let isVerified = true;
let isLoggedIn = true;
let hasPaymentToken = false;
let isGuest = true;

if (isVerified && isLoggedIn && hasPaymentToken) {
  console.log("Greeting message to the user");
  console.log("Grant access to the paid course");
} else if (isVerified || isGuest) {
  console.log("Allow free previews");
} else {
  console.log("Please contact h");
}
console.log("------------------");

if (isVerified && isLoggedIn && !hasPaymentToken) {
  console.log("Greeting message to the user");
  console.log("Grant access to the paid course");
} else if (isVerified || isGuest) {
  console.log("Allow free previews");
} else {
  console.log("Please contact h");
}
