// Merge multiple objects inside the same array into one object [duplicate]

/* 
let arrObj = [
  { a: 1, b: 2 },
  { c: 3, d: 4 },
  { e: 5, f: 6 },
];

how can you merge this into one obj? 

*/

//mergedObj = {a:1, b:2, c:3, d:4, e:5, f:6}

//Answers

const arrObj = [
  { a: 1, b: 2 },
  { c: 3, d: 4 },
  { e: 5, f: 6 },
];

// 1.
console.log(
  arrObj.reduce(function (result, current) {
    return Object.assign(result, current);
  }, {})
);

// 2.
// If you prefer arrow functions, you can make it a one-liner ;-)
console.log(arrObj.reduce((r, c) => Object.assign(r, c), {}));

// 3.
// Thanks Spen from the comments. You can use the spread operator with assign
console.log(Object.assign({}, ...arrObj));
