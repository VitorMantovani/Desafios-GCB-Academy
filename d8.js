const nestedArray = [1, "oi", [3], [4, 5]];

// function flatNestedArray(array) {
//   const flatArray = new Array();
//   array.forEach((element) => {
//     !(typeof element === "number" || typeof element === "string")
//       ? element.forEach((listItem) => flatArray.push(listItem))
//       : flatArray.push(element);
//   });
//   return flatArray;
// }

// const response = flatNestedArray(nestedArray);

// console.log(response);

//Jeito 2

console.log(nestedArray.flat());
