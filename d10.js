function commom(arrOne, arrTwo) {
  const equal = [];
  arrOne.forEach((num) => {
    if (arrTwo.includes(num)) equal.push(num);
  });
  return equal;
}

const response = commom([6, 8], [8, 9]);
console.log(response);
