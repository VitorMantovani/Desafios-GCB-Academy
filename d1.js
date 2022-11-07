const quantityLoop = 2;

const element = "i";

function arrayOfElementsForLoop(qtnLoop, element) {
  const elements = new Array();

  for (let i = 0; i < qtnLoop; i++) elements.push(element);

  return elements;
}

const response = arrayOfElementsForLoop(quantityLoop, element);

console.log(response);

// Metodo 2

// const arrayOfElementsForLoop = (qtnLoop, element) =>
//   Array(qtnLoop).fill(element);
// console.log(arrayOfElementsForLoop(2, "oi"));
