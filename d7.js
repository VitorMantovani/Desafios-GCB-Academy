const compare = (arrOne, arrTwo) =>
  arrOne.length === arrTwo.length &&
  arrOne.every((num, index) => num === arrTwo[index]);

const response = compare([1, 2, 3, 4], [1, 2, 3, 4]);

function compareTwo(arrO, arrT) {
  arrO.forEach((num) => {
    return arrT.includes(num);
  });
}

const responseTwo = compare([1, 2, 3, 4], [1, 2, 3, 4]);

console.log(responseTwo);

console.log(response);
