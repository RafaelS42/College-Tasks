console.log("Calculo de médias");

let nota1 = parseFloat(prompt("primeira nota:"));
let nota2 = parseFloat(prompt("segunda nota:"));
let nota3 = parseFloat(prompt("terceira nota:"));

let peso1 = 2;
let peso2 = 3;
let peso3 = 5;

let media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

console.log("A média escolar é: " + media.toFixed(2));
alert("A média é " + media )