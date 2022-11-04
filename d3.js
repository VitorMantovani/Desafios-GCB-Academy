function limpar(array) {
  const limpa = [];
  array.forEach((element) => {
    if (
      element == false ||
      element == undefined ||
      element == "" ||
      element == 0 ||
      element == null
    ) {
      return;
    } else {
      limpa.push(element);
    }
  });
  return limpa;
}

console.log(limpar([1, "", undefined, 0, 4, "ola"]));
