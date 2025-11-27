const board = new ArrayBuffer(24);

const row1A = new Uint8Array(board, 0, 3);
const row1B = new Uint8Array(board, 3, 3);
const row2A = new Uint8Array(board, 8, 3);
const row2B = new Uint8Array(board, 11, 3);
const row3A = new Uint8Array(board, 16, 3);
const row3B = new Uint8Array(board, 19, 3);
const rows = new Float64Array(board);

const randomSortedRow = (freedoms = 0) => {
  if (freedoms === 3) {
    return [0, 0, 0];
  }
  const limit = 8 - freedoms;
  const choices = [Math.floor(Math.random() * limit)];
  while (choices.length < 3 - freedoms) {
    const choice = Math.floor(Math.random() * limit);
    if (!choices.includes(choice)) {
      choices.push(choice);
    }
  }
  choices.sort();
  return Array(freedoms)
    .fill(0)
    .concat(choices.map((choice, index) => choice - index + 1));
};

const randomRow = () =>
  Array.from({ length: 3 }, () => Math.floor(Math.random() * 7));

const randomFullRow = () =>
  Array.from({ length: 3 }, () => Math.floor(Math.random() * 6) + 1);

const randomRowOneFreedom = () => [
  ...Array.from({ length: 2 }, () => Math.floor(Math.random() * 6) + 1),
  0,
];

// let count = 0;
// Array.from({ length: 1000000 }, () => {
    row1A.set(randomSortedRow());
    row1B.set(randomSortedRow());
    row2A.set(randomSortedRow());
    row2B.set(randomSortedRow());
    row3A.set(randomSortedRow());
    row3B.set(randomSortedRow());

//   //   if (
//   //     row1A.some((n) => row1B.includes(n)) ||
//   //     row2A.some((n) => row2B.includes(n)) ||
//   //     row3A.some((n) => row3B.includes(n))
//   //   ) {
//   //     count += 1;
//   //   }
//   // });

//   // VALID FULL BOARD CHANCE
//   row1A.set(randomFullRow());
//   row2A.set(randomFullRow());
//   row3A.set(randomFullRow());
//   row1B.set(randomFullRow());
//   row2B.set(randomFullRow());
//   row3B.set(randomFullRow());
//   if (
//     row1A.some((n) => n > 0 && row1B.includes(n)) ||
//     row2A.some((n) => n > 0 && row2B.includes(n)) ||
//     row3A.some((n) => n > 0 && row3B.includes(n))
//   ) {
//     count += 1;
//   }
// });

// console.log(count);

row1A.sort();
row2A.sort();
row3A.sort();
row1B.sort();
row2B.sort();
row3B.sort();

rows.sort();

const row1 = new Uint8Array(board, 0, 6);
const row2 = new Uint8Array(board, 8, 6);
const row3 = new Uint8Array(board, 16, 6);

const boardString = (
  row1.toString() +
  row2.toString() +
  row3.toString()
).replace(/,/g, "");

console.log(boardString);
console.log("")
// console.log(atob(boardString));

const code = "+-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const encode = (num) => code[num];

const compressed =
  encode(row1[0] + row1[1] * 8) +
  encode(row1[2] + row1[3] * 8) +
  encode(row1[4] + row1[5] * 8) +
  encode(row2[0] + row2[1] * 8) +
  encode(row2[2] + row2[3] * 8) +
  encode(row2[4] + row2[5] * 8) +
  encode(row3[0] + row3[1] * 8) +
  encode(row3[2] + row3[3] * 8) +
  encode(row3[4] + row3[5] * 8);

console.log(compressed);

// 84 distinct sets of 3 (9 take 3)
const n = 0;
String.fromCharCode(n + 38);