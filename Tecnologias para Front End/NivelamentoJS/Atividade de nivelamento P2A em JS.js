/*desenvolva um programa que obtenha dados da altura e genero (m ou f) de 15 pessoas
e responsa os seguintes quesitos:

- qual a maior e menor altura informada;
- qual a média de altura dos homens;
- qual a quantidade de mulheres.*/

function somarArray(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
      soma += array[i];
    }
    return soma;
  }

function lowest(array){
    if (array.length === 0) {
        return "O array está vazio.";
    }
    let low = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < low) {
            low = array[i];
        }
    }
    return low;
}

function biggest(array){
    if (array.length === 0) {
        return "O array está vazio.";
    }
    let high = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > high) {
            high = array[i];
        }
    }
    return high;
}


const mans = [];
const womans = [];
var tallest = 0;
var shortest = 0;

for (let i = 0; i < 15; i++){
    console.log('Contole = ' + +i);

    let genero = prompt('H/M ?').toLowerCase();
    let altura = parseInt(prompt('Qual a altura ?'));

    if (genero == 'h'){
        console.log('h');
        mans.push(altura);
    } else if (genero == 'm') {
        console.log('m');
        womans.push(altura);
    } else {
        console.log('Digite H ou M no genero.');
        let controle = controle - 1;
    }
}

allheights = [...mans, ...womans];

tallest = biggest(allheights);
shortest = lowest(allheights);

const manAvearge = (somarArray(mans))/(mans.length);

console.log(allheights)

console.log("A média da altura dos homens é "+ manAvearge)
console.log("A pessoa mais alta é " + tallest);
console.log("A pessoa mais baixa é " + shortest);
console.log("Há "+ womans.length + " mulheres." )

