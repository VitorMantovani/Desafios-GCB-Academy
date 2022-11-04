function unnest(array) {
  const clear = [];
  array.forEach((item) => {
    if (!(typeof item === "number")) {
      item.forEach((listItem) => {
        clear.push(listItem);
      });
    } else {
      clear.push(item);
    }
  });
  return clear;
}

const response = unnest([1, 2, [3], [4, 5]]);

console.log(response);
