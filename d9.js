const baseArray = [1, 2, 3, 4, 5];
const sliceBy = 2;

function sliceArray(array, sliceBy) {
  const slicedArray = new Array();
  for (let i = 0; i < array.length; i = i + sliceBy) {
    slicedArray.push(array.slice(i, i + sliceBy));
  }
  return slicedArray;
}

const response = sliceArr(baseArray, sliceBy);

console.log(response);
