function inverter(array) {
  const invertida = new Array();
  for (let i = array.length - 1; i >= 0; i--) {
    invertida.push(array[i]);
  }
  return invertida;
}

const reponse = inverter([1, 3, 5, 6]);

console.log(reponse);
