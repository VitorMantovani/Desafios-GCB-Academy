function filter(arrOne, arrTwo) {
  const filtred = [];
  arrOne.forEach((num) => {
    if (!arrTwo.includes(num)) filtred.push(num);
  });
  return filtred;
}

const response = filter([5, 4, 3, 2, 5], [5, 3]);

console.log(response);
