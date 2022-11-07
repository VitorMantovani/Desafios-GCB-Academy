const duplicatedValuesArray = [1, 2, 3, 3, 2, 4, 5, 4, 7, 3];

function removeDuplicatedValuesFromArray(array) {
  const arrayWithoutDuplicatedValues = new Array();
  array.forEach(
    (element) =>
      !arrayWithoutDuplicatedValues.includes(element) &&
      arrayWithoutDuplicatedValues.push(element)
  );
  return arrayWithoutDuplicatedValues;
}
const response = removeDuplicatedValuesFromArray(duplicatedValuesArray);

// console.log(response);

// Jeito 2

//Spred Operator
console.log([...new Set(duplicatedValuesArray)]);
