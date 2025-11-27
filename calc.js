const board = new ArrayBuffer(6);

const row1 = new Uint8Array(board, 0, 3);
const row2 = new Uint8Array(board, 3, 3);

const boards = {};
const boardList = [];
let count = 0;

Array.from({ length: 10 }, (a, first) => {
  Array.from({ length: 10 }, (a, second) => {
    Array.from({ length: 10 }, (a, third) => {
      row1.set([first, second, third]);
      row1.sort();
      const boardString = row1.toString().replace(/,/g, "");
      if (!(boardString in boards)) {
        // console.log(boardString);
        boards[boardString] = count;
        boardList.push(boardString);
        count += 1;
      }
    });
  });
});

console.log(count);
console.log(boardList.length);
console.log(boardList[200]);
