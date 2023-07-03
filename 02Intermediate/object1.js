let myYTvid1 = {
  // key: 'value',
  title: "Objects in JS",
  vidLength: 15,
  vidCreator: "Utsav",
  vidDescription: "This id a vid description",
};
let myYTvid2 = {
  // key: 'value',
  title: "Objects in JS",
  vidLength: 10,
  vidCreator: "Utsav",
  vidDescription: "This id a vid description",
};

// print values using funcion :-
// let changeVideoLength = function (myObject) {
//   console.log(`Time of this video is: ${myObject.vidLength}`);
// };

// changeVideoLength(myYTvid1);
// changeVideoLength(myYTvid2);

// return values :-
// let changeVideoLength = function (myObject) {
//   return `Time of this video is: ${myObject.vidLength}`;
// };
// console.log(changeVideoLength(myYTvid1));
// console.log(changeVideoLength(myYTvid2));

// return multiple values using objects  :-
let changeVideoLength = function (myObject) {
  return {
    format1: `Time of this video is: ${myObject.vidLength + 2}`,
    format2: `Time of this video is: ${myObject.vidLength + 4}`,
  };
};
console.log(changeVideoLength(myYTvid1));
console.log(changeVideoLength(myYTvid2));
let ad1 = changeVideoLength(myYTvid1);
let ad2 = changeVideoLength(myYTvid2);
console.log(ad1.format1);
console.log(ad1.format2);
console.log(ad2.format1);
console.log(ad2.format2);

// Note:-
// when you access properties inside an object,
// and if you change that, it is being changed in the real object.
