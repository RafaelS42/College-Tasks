// Área = 3.14*2*raio
// Perimetro = 3.14*raio*2
const pi = 3.14;

let raio = prompt('Qual o raio do circulo ? ');

let perimetro = (pi*(raio*2)) ;
console.log('périmetro= '+ perimetro.toFixed(2));

let area = (pi*(raio*raio));
console.log('área= '+ area.toFixed(2));