const keyAndValueArray = [
  ["c", 2],
  ["d", 4],
];

function arrayToObject(array) {
  const obj = {};
  array.forEach(([key, value]) => (obj[key] = value));

  return obj;
}
console.log(arrayToObject(keyAndValueArray));

// jeito 2

// console.log(Object.fromEntries(keyAndValueArray));
