const array = [1, 3, 5, 6];

function reverseArray(array) {
  const reversedArray = new Array();

  for (let i = array.length - 1; i >= 0; i--) reversedArray.push(array[i]);

  return reversedArray;
}

const reponse = inverter(array);

// console.log(reponse);

// Jeito 2

// console.log(array.reverse());
