const truthyAndFalsyValues = [1, "", undefined, 0, 4, "ola"];

function cleanFalsyElementsFromArray(array) {
  const cleanedArray = new Array();

  array.forEach((element) => {
    element && cleanedArray.push(element);
  });

  return cleanedArray;
}

console.log(cleanFalsyElementsFromArray(truthyAndFalsyValues));

// Jeito 2

// console.log(truthyAndFalsyValues.filter(Boolean));
