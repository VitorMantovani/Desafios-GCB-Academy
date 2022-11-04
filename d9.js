function sliceArr(arr, num) {
  const sliced = [];
  for (let i = 0; i < arr.length; i = i + num) {
    sliced.push(arr.slice(i, i + num));
  }
  return sliced;
}

const response = sliceArr([1, 2, 3, 4, 5], 2);

console.log(response);
