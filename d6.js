function duplicated(array) {
  const filtred = new Array();
  array.forEach((num) => {
    if (!filtred.includes(num)) filtred.push(num);
  });
  return filtred;
}

const response = duplicated([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]);

console.log(response);
