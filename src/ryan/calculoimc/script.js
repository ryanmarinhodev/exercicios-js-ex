// // const calcularPeso = prompt("Digite seu peso");
// // const calcularAltura = prompt("Digite sua altura");
// const peso2 = 74;
// const altura2 = 1.9;

// function calculoImc(peso2, altura2) {
//   const calcular = peso2 / (altura2 * altura2);
//   return calcular.toFixed(1);
// }
// console.log("O imc é:", calculoImc(peso2, altura2));

const peso = parseInt(prompt("peso: "));
const altura = parseInt(prompt("altura: "));

const imc = peso / (altura * altura);

alert(`O seu IMC é ${imc}`);
