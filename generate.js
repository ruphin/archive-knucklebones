const board = new ArrayBuffer(6);

const row1 = new Uint8Array(board, 0, 3);
const row2 = new Uint8Array(board, 3, 3);

const boards = {};
const boardList = [];
let count = 0;

Array.from({ length: 7 }, (a, first) => {
  Array.from({ length: 7 }, (a, second) => {
    Array.from({ length: 7 }, (a, third) => {
      Array.from({ length: 7 }, (a, fourth) => {
        Array.from({ length: 7 }, (a, fifth) => {
          Array.from({ length: 7 }, (a, sixth) => {
            row1.set([first,second,third]);
            row1.sort();
            row2.set([fourth,fifth,sixth]);
            row2.sort();
            if (!row1.some(n => n !== 0 && row2.includes(n))) {
              const boardString = (
                row1.toString() +
                row2.toString()
              ).replace(/,/g, "");
              if (!(boardString in boards)) {
                boards[boardString] = count;
                boardList.push(boardString)
                count += 1;
              }
            }

          })
        })
      })
    })
  })
})

10000

const rowA = 10000 % 3067;
const rowB = Math.floor(10000 / 3067) % 3067;


console.log(boardList[rowA])
console.log(boardList[rowB])

console.log(boards["000003"] * 3067 + boards["025144"])


console.log(boards["025144"] * 3067 + boards["000003"])

