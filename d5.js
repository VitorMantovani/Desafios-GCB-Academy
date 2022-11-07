const baseArray = [5, 4, 3, 2, 5];
const valuesToBeRemoved = [5, 3];

function removeValuesFromArray(arrOne, arrTwo) {
  const filtred = new Array();
  arrOne.forEach((num) => {
    if (!arrTwo.includes(num)) filtred.push(num);
  });
  return filtred;
}

// const response = removeValuesFromArray(baseArray, valuesToBeRemoved);

// Jeito 2

// const filtredArray = baseArray.filter(
//   (element) => !valuesToBeRemoved.includes(element)
// );
// console.log(filtredArray);
