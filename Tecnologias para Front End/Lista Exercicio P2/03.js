let n = parseInt(prompt("Quantidade de números: "));
let numeros = [];
let menorValor;
let maiorValor;
soma = 0;

for (let i = 0; i < n; i++) {
  let numero = parseFloat(prompt("Digite o " + (i + 1) + "º número:"));
    if (i === 0) {
      menorValor = numero;
      maiorValor = numero;
    } else {
      if (numero < menorValor) {
        menorValor = numero;
      }
      if (numero > maiorValor) {
        maiorValor = numero;
      }}
    soma += numero;
  }
  
console.log("Menor valor:"+ menorValor);
console.log("Maior valor:"+ maiorValor);
console.log("Soma: "+ soma);