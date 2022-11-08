const arrayOne = [6, 8];
const arrayTwo = [8, 9];

function findCommomValuesBetweenArrays(arrOne, arrTwo) {
  const commomValue = new Array();
  arrOne.forEach(
    (element) => arrTwo.includes(element) && commomValue.push(element)
  );
  return commomValue;
}

const response = findCommomValuesBetweenArrays([6, 8], [8, 9]);
console.log(response);

// Jeito 2

console.log(arrayOne.filter((element) => arrayTwo.includes(element)));
