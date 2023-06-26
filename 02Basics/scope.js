let iAmGlobal = "same Value";

if (true) {
  let iamLocal = "someMoreValue";
  var Local = "localMoreValue";
  iAmGlobal = "super man";

  console.log(iAmGlobal);
  console.log(iamLocal);
}
// console.log(iamLocal); //ReferenceError: iamLocal is not defined
console.log(iAmGlobal);
console.log(Local);
