let numerosPares = 0;
let numerosImpares = 0;

for (let i = 1; i <= 10; i++) {
  let numero = parseInt(prompt( i + "° número : "));

    if (numero % 2 === 0) {
      numerosPares++;
    } else {
      numerosImpares++;
    }}

console.log("Número de números pares: " + numerosPares);
console.log("Número de números ímpares: " + numerosImpares );
