var salarioInicial = parseInt(prompt("Salário inicial = "));
const anoAtual = 2023;
const anoDuplicado = 1997;
var porcentagem = 0.015;
var salario = salarioInicial;
var ano = 1997;

console.log("1996 : " + (salario = ((salarioInicial) + (salarioInicial * porcentagem)))+" Reais");

var porcentagem = 0.03;
for (let i = 0; i < (anoAtual - (anoDuplicado - 1)); i++) {
 //   porcentagem *= 2;
    salario += (salario*porcentagem);
    console.log(ano + " = " + salario.toFixed(2) + " Reais");
    ano += 1;
}
