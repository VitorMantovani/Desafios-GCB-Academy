function toObject(array) {
  const obj = {};
  array.forEach((item) => {
    obj[item[0]] = item[1];
  });
  console.log(obj);
}

toObject([
  ["c", 2],
  ["d", 4],
]);
