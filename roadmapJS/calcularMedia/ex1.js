function calcularMedias(notas) {
  const soma = notas.reduce(
    (acumulador, notaAtual) => acumulador + notaAtual,
    0
  );

  const media = soma / notas.length;

  return media;
}
const resultado = calcularMedias([8, 7, 10]);
console.log(`A média é ${resultado}`);
