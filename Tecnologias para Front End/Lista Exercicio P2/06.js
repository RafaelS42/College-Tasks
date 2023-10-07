/*
 Use a fórmula: M = C * (1+i)t
▪ C = Capital inicial investido
▪ i = Taxa de juros, em percentual
▪ t = Tempo do investimento, em meses */

const c = parseInt(prompt("Valor investido: "));
const i = (parseInt(prompt("Taxa de juros mensal ( exp. 10 = 10%):  ")))/100;
console.log(i)
const t = parseInt(prompt("Período em meses: "))
var m = (c * (1+i)**t);

console.log(m.toFixed(2))

