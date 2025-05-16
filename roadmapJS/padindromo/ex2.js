// criar uma função para verificar se é palindromo
// (lida igual de trás pra frente)
// recebe uma string com um nome

function palindromo(nome) {
  const splitString = nome.split("");
  const reverseArray = splitString.reverse();
  const nomeInvertido = reverseArray.join("");

  if (nome === nomeInvertido) {
    console.log(`${nome} é um palíndromo`);
  } else {
    console.log("Não é palíndromo");
  }
}

palindromo("mirim");
palindromo("ryan");
