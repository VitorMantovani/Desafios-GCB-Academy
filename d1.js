function run(qtn, iten) {
  const lista = [];
  for (let i = 0; i < qtn; i++) {
    lista.push(iten);
  }
  return lista;
}
const response = run(2, "i");

console.log(response);
